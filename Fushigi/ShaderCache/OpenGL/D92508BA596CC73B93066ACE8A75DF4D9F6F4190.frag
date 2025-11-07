#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform samplerCube fp_t_tcb_16;
layout (binding = 2) uniform sampler2D fp_t_tcb_24;
layout (binding = 3) uniform sampler2D fp_t_tcb_30;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise vec3 temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise vec3 temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise vec3 temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise vec3 temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    // 0x000008: 0x4C98079C0207001B Mov
    // 0x000010: 0xE003FF87CFF7FF03 Ipa
    // 0x000018: 0x5080000000470303 Mufu
    // 0x000028: 0xE043FF8D0037FF01 Ipa
    temp_0 = in_attr5.x;
    // 0x000030: 0xE043FF8D4037FF10 Ipa
    temp_1 = in_attr5.y;
    // 0x000038: 0xD830026FF1070100 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xE043FF8A0037FF06 Ipa
    temp_5 = in_attr2.x;
    // 0x000050: 0xE043FF8A4037FF07 Ipa
    temp_6 = in_attr2.y;
    // 0x000058: 0xE043FF890037FF0A Ipa
    temp_7 = in_attr1.x;
    // 0x000068: 0xE043FF8A8037FF08 Ipa
    temp_8 = in_attr2.z;
    // 0x000070: 0xE043FF894037FF0B Ipa
    temp_9 = in_attr1.y;
    // 0x000078: 0xE043FF880037FF05 Ipa
    temp_10 = in_attr0.x;
    // 0x000088: 0xE043FF898037FF0C Ipa
    temp_11 = in_attr1.z;
    // 0x000090: 0xE043FF884037FF02 Ipa
    temp_12 = in_attr0.y;
    // 0x000098: 0xE043FF888037FF04 Ipa
    temp_13 = in_attr0.z;
    // 0x0000A8: 0xE043FF8D0037FF19 Ipa
    temp_14 = in_attr5.x;
    // 0x0000B0: 0x5C68100000670609 Fmul
    temp_15 = temp_5 * temp_5;
    // 0x0000B8: 0x5C68100000A70A0D Fmul
    temp_16 = temp_7 * temp_7;
    // 0x0000C8: 0x5C6810000057050F Fmul
    temp_17 = temp_10 * temp_10;
    // 0x0000D0: 0x59A0048000770709 Ffma
    temp_18 = fma(temp_6, temp_6, temp_15);
    // 0x0000D8: 0x59A0068000B70B0D Ffma
    temp_19 = fma(temp_9, temp_9, temp_16);
    // 0x0000E8: 0x59A007800027020F Ffma
    temp_20 = fma(temp_12, temp_12, temp_17);
    // 0x0000F0: 0x59A0048000870809 Ffma
    temp_21 = fma(temp_8, temp_8, temp_18);
    // 0x0000F8: 0x5080000000570909 Mufu
    temp_22 = inversesqrt(temp_21);
    // 0x000108: 0x59A0068000C70C0D Ffma
    temp_23 = fma(temp_11, temp_11, temp_19);
    // 0x000110: 0x5080000000570D0D Mufu
    temp_24 = inversesqrt(temp_23);
    // 0x000118: 0x59A007800047040F Ffma
    temp_25 = fma(temp_13, temp_13, temp_20);
    // 0x000128: 0x5080000000570F0F Mufu
    temp_26 = inversesqrt(temp_25);
    // 0x000130: 0x5C6810000097060E Fmul
    temp_27 = temp_5 * temp_22;
    // 0x000138: 0x5C68100000970707 Fmul
    temp_28 = temp_6 * temp_22;
    // 0x000148: 0x5C68100000970808 Fmul
    temp_29 = temp_8 * temp_22;
    // 0x000150: 0x5C68100000D70C06 Fmul
    temp_30 = temp_11 * temp_24;
    // 0x000158: 0x5C68100000D70A0A Fmul
    temp_31 = temp_7 * temp_24;
    // 0x000168: 0x5C68100000D70B0B Fmul
    temp_32 = temp_9 * temp_24;
    // 0x000170: 0x5C68100000F7020D Fmul
    temp_33 = temp_12 * temp_26;
    // 0x000178: 0x5C68100000F70404 Fmul
    temp_34 = temp_13 * temp_26;
    // 0x000188: 0x5C68100000170109 Fmul
    temp_35 = temp_4 * temp_4;
    // 0x000190: 0x5C68100000170702 Fmul
    temp_36 = temp_28 * temp_4;
    // 0x000198: 0x59A0048000070009 Ffma
    temp_37 = fma(temp_3, temp_3, temp_35);
    // 0x0001A8: 0x59A0010000070B02 Ffma
    temp_38 = fma(temp_32, temp_3, temp_36);
    // 0x0001B0: 0x385D103F8007090C Fadd
    temp_39 = 0.0 - temp_37;
    temp_40 = temp_39 + 1.0;
    temp_41 = clamp(temp_40, 0.0, 1.0);
    // 0x0001B8: 0x5C68100000170E09 Fmul
    temp_42 = temp_27 * temp_4;
    // 0x0001C8: 0x5080000000870C13 Mufu
    temp_43 = sqrt(temp_41);
    // 0x0001D0: 0x5C68100000F7050E Fmul
    temp_44 = temp_10 * temp_26;
    // 0x0001D8: 0xE003FF874FF7FF05 Ipa
    temp_45 = gl_FragCoord.y;
    temp_46 = support_buffer.render_scale[0];
    temp_47 = temp_45 / temp_46;
    // 0x0001E8: 0x5C68100000170801 Fmul
    temp_48 = temp_29 * temp_4;
    // 0x0001F0: 0x59A0048000070A09 Ffma
    temp_49 = fma(temp_31, temp_3, temp_42);
    // 0x0001F8: 0x59A0008000070601 Ffma
    temp_50 = fma(temp_30, temp_3, temp_48);
    // 0x000208: 0xE043FF908037FF06 Ipa
    temp_51 = in_attr8.z;
    // 0x000210: 0x59A0048001370E09 Ffma
    temp_52 = fma(temp_44, temp_43, temp_49);
    // 0x000218: 0x59A0010001370D02 Ffma
    temp_53 = fma(temp_33, temp_43, temp_38);
    // 0x000228: 0x59A0008001370401 Ffma
    temp_54 = fma(temp_34, temp_43, temp_50);
    // 0x000230: 0xE003FF870FF7FF04 Ipa
    temp_55 = gl_FragCoord.x;
    temp_56 = support_buffer.render_scale[0];
    temp_57 = temp_55 / temp_56;
    // 0x000238: 0x5C68100000970900 Fmul
    temp_58 = temp_52 * temp_52;
    // 0x000248: 0x59A0000000270200 Ffma
    temp_59 = fma(temp_53, temp_53, temp_58);
    // 0x000250: 0x59A0000000170100 Ffma
    temp_60 = fma(temp_54, temp_54, temp_59);
    // 0x000258: 0x4C68100C04B70508 Fmul
    temp_61 = temp_47 * fp_c3.data[18].w;
    // 0x000268: 0xE043FF904037FF05 Ipa
    temp_62 = in_attr8.y;
    // 0x000270: 0x4C98079800A7001A Mov
    // 0x000278: 0x5080000000570000 Mufu
    temp_63 = inversesqrt(temp_60);
    // 0x000288: 0x4C68100C04A70407 Fmul
    temp_64 = temp_57 * fp_c3.data[18].z;
    // 0x000290: 0xE043FF900037FF04 Ipa
    temp_65 = in_attr8.x;
    // 0x000298: 0x5C68100000070211 Fmul
    temp_66 = temp_53 * temp_63;
    // 0x0002A8: 0x5C68100000070912 Fmul
    temp_67 = temp_52 * temp_63;
    // 0x0002B0: 0x5C68100000070113 Fmul
    temp_68 = temp_54 * temp_63;
    // 0x0002B8: 0x5C62578001271101 Fmnmx
    temp_69 = abs(temp_66);
    temp_70 = abs(temp_67);
    temp_71 = max(temp_69, temp_70);
    // 0x0002C8: 0x5C60578000171309 Fmnmx
    temp_72 = abs(temp_68);
    temp_73 = max(temp_72, temp_71);
    // 0x0002D0: 0x508000000047090C Mufu
    temp_74 = 1.0 / temp_73;
    // 0x0002D8: 0x5C68100000C71200 Fmul
    temp_75 = temp_67 * temp_74;
    // 0x0002E8: 0x5C68100000C71101 Fmul
    temp_76 = temp_66 * temp_74;
    // 0x0002F0: 0x5C69100000C71302 Fmul
    temp_77 = 0.0 - temp_74;
    temp_78 = temp_68 * temp_77;
    // 0x0002F8: 0xC0BA0163EFF70000 Tex
    temp_79 = textureLod(fp_t_tcb_16, vec3(temp_75, temp_76, temp_78), 0.0).xyz;
    temp_80 = temp_79.x;
    temp_81 = temp_79.y;
    temp_82 = temp_79.z;
    // 0x000308: 0xD8220240E107190A Texs
    temp_83 = texture(fp_t_tcb_24, vec2(temp_14, temp_1)).xyz;
    temp_84 = temp_83.x;
    temp_85 = temp_83.y;
    temp_86 = temp_83.z;
    // 0x000310: 0xD8220300F107190C Texs
    temp_87 = texture(fp_t_tcb_30, vec2(temp_14, temp_1)).xyz;
    temp_88 = temp_87.x;
    temp_89 = temp_87.y;
    temp_90 = temp_87.z;
    // 0x000318: 0xD822020070870708 Texs
    temp_91 = texture(fp_t_tcb_20, vec2(temp_64, temp_61)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000328: 0xDEBA0000C1B70404 TexB
    temp_95 = texture(fp_t_cb7_20, vec3(temp_65, temp_62, temp_51)).x;
    // 0x000330: 0xE043FF8B0037FF14 Ipa
    temp_96 = in_attr3.x;
    // 0x000338: 0xE043FF8B4037FF15 Ipa
    temp_97 = in_attr3.y;
    // 0x000348: 0xE043FF8B8037FF16 Ipa
    temp_98 = in_attr3.z;
    // 0x000350: 0x4C59101800671A1A Fadd
    temp_99 = 0.0 - fp_c6.data[2].z;
    temp_100 = temp_99 + fp_c6.data[1].z;
    // 0x000358: 0x5C68100001471417 Fmul
    temp_101 = temp_96 * temp_96;
    // 0x000368: 0x59A00B8001571517 Ffma
    temp_102 = fma(temp_97, temp_97, temp_101);
    // 0x000370: 0x59A00B8001671617 Ffma
    temp_103 = fma(temp_98, temp_98, temp_102);
    // 0x000378: 0x5080000000571717 Mufu
    temp_104 = inversesqrt(temp_103);
    // 0x000388: 0x5C69100001771414 Fmul
    temp_105 = 0.0 - temp_104;
    temp_106 = temp_96 * temp_105;
    // 0x000390: 0x5C69100001771510 Fmul
    temp_107 = 0.0 - temp_104;
    temp_108 = temp_97 * temp_107;
    // 0x000398: 0x4C58301805C71415 Fadd
    temp_109 = 0.0 - fp_c6.data[23].x;
    temp_110 = temp_106 + temp_109;
    // 0x0003A8: 0x5C69100001771605 Fmul
    temp_111 = 0.0 - temp_104;
    temp_112 = temp_98 * temp_111;
    // 0x0003B0: 0x4C58301805D71016 Fadd
    temp_113 = 0.0 - fp_c6.data[23].y;
    temp_114 = temp_108 + temp_113;
    // 0x0003B8: 0x5C68100001271417 Fmul
    temp_115 = temp_106 * temp_67;
    // 0x0003C8: 0x5C68100001571518 Fmul
    temp_116 = temp_110 * temp_110;
    // 0x0003D0: 0x4C58301805E70506 Fadd
    temp_117 = 0.0 - fp_c6.data[23].z;
    temp_118 = temp_112 + temp_117;
    // 0x0003D8: 0x59A00C0001671618 Ffma
    temp_119 = fma(temp_114, temp_114, temp_116);
    // 0x0003E8: 0x59A00C0000670619 Ffma
    temp_120 = fma(temp_118, temp_118, temp_119);
    // 0x0003F0: 0x59A00B8001171018 Ffma
    temp_121 = fma(temp_108, temp_66, temp_115);
    // 0x0003F8: 0x508000000057191B Mufu
    temp_122 = inversesqrt(temp_120);
    // 0x000408: 0x4C98079809070017 Mov
    // 0x000410: 0x59A40C0001370518 Ffma
    temp_123 = fma(temp_112, temp_68, temp_121);
    temp_124 = clamp(temp_123, 0.0, 1.0);
    // 0x000418: 0x4C98079800970019 Mov
    // 0x000428: 0x51A10B9809071818 Ffma
    temp_125 = 0.0 - fp_c6.data[36].x;
    temp_126 = fma(temp_124, temp_125, fp_c6.data[36].x);
    // 0x000430: 0x5C68100001B71515 Fmul
    temp_127 = temp_110 * temp_122;
    // 0x000438: 0x5080400000371818 Mufu
    temp_128 = abs(temp_126);
    temp_129 = log2(temp_128);
    // 0x000448: 0x5C68100001B71616 Fmul
    temp_130 = temp_114 * temp_122;
    // 0x000450: 0x5C68100001B70606 Fmul
    temp_131 = temp_118 * temp_122;
    // 0x000458: 0x4C59101800571919 Fadd
    temp_132 = 0.0 - fp_c6.data[2].y;
    temp_133 = temp_132 + fp_c6.data[1].y;
    // 0x000468: 0x010404000007F01B Mov32i
    // 0x000470: 0x5C68100001571415 Fmul
    temp_134 = temp_106 * temp_127;
    // 0x000478: 0x0103F0000007F014 Mov32i
    // 0x000488: 0x59A00A8001671010 Ffma
    temp_135 = fma(temp_108, temp_130, temp_134);
    // 0x000490: 0x32A00A3F00071114 Ffma
    temp_136 = fma(temp_66, 0.5, 0.5);
    // 0x000498: 0x59A4080000670506 Ffma
    temp_137 = fma(temp_112, temp_131, temp_135);
    temp_138 = clamp(temp_137, 0.0, 1.0);
    // 0x0004A8: 0x01040DF760C7F010 Mov32i
    // 0x0004B0: 0x4C68101809171805 Fmul
    temp_139 = temp_129 * fp_c6.data[36].y;
    // 0x0004B8: 0x49A2080400070610 Ffma
    temp_140 = fma(temp_138, fp_c1.data[0].x, -6.98316002);
    // 0x0004C8: 0x5C68100001070610 Fmul
    temp_141 = temp_138 * temp_140;
    // 0x0004D0: 0x4C69101805C71206 Fmul
    temp_142 = 0.0 - fp_c6.data[23].x;
    temp_143 = temp_67 * temp_142;
    // 0x0004D8: 0x5C90008000570012 Rro
    // 0x0004E8: 0x4C98079809A70005 Mov
    // 0x0004F0: 0x5084000000271212 Mufu
    temp_144 = exp2(temp_139);
    temp_145 = clamp(temp_144, 0.0, 1.0);
    // 0x0004F8: 0x5C90008001070010 Rro
    // 0x000508: 0x49A1031805D71106 Ffma
    temp_146 = 0.0 - fp_c6.data[23].y;
    temp_147 = fma(temp_66, temp_146, temp_143);
    // 0x000510: 0x5080000000271010 Mufu
    temp_148 = exp2(temp_141);
    // 0x000518: 0x4C98079800870011 Mov
    // 0x000528: 0x4C58101408170505 Fadd
    temp_149 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x000530: 0x49A5031805E71313 Ffma
    temp_150 = 0.0 - fp_c6.data[23].z;
    temp_151 = fma(temp_68, temp_150, temp_147);
    temp_152 = clamp(temp_151, 0.0, 1.0);
    // 0x000538: 0xE04BFF8F4037FF06 Ipa
    temp_153 = in_attr7.y;
    temp_154 = clamp(temp_153, 0.0, 1.0);
    // 0x000548: 0x4C59101800471111 Fadd
    temp_155 = 0.0 - fp_c6.data[2].x;
    temp_156 = temp_155 + fp_c6.data[1].x;
    // 0x000550: 0x5C68100000571212 Fmul
    temp_157 = temp_145 * temp_149;
    // 0x000558: 0x4C68101801471305 Fmul
    temp_158 = temp_152 * fp_c6.data[5].x;
    // 0x000568: 0x49A1081407B71015 Ffma
    temp_159 = 0.0 - fp_c5.data[30].w;
    temp_160 = fma(temp_148, temp_159, temp_148);
    // 0x000570: 0x4C68101801571310 Fmul
    temp_161 = temp_152 * fp_c6.data[5].y;
    // 0x000578: 0x4C68101801671313 Fmul
    temp_162 = temp_152 * fp_c6.data[5].z;
    // 0x000588: 0x51A00A1800871111 Ffma
    temp_163 = fma(temp_156, temp_136, fp_c6.data[2].x);
    // 0x000590: 0x1E23EA2F98370516 Fmul32i
    temp_164 = temp_158 * 0.318309873;
    // 0x000598: 0x4C58101407B71515 Fadd
    temp_165 = temp_160 + fp_c5.data[30].w;
    // 0x0005A8: 0x4C68101808C71205 Fmul
    temp_166 = temp_157 * fp_c6.data[35].x;
    // 0x0005B0: 0x1E23EA2F98371017 Fmul32i
    temp_167 = temp_161 * 0.318309873;
    // 0x0005B8: 0x51A00A1800971910 Ffma
    temp_168 = fma(temp_133, temp_136, fp_c6.data[2].y);
    // 0x0005C8: 0x51A00A1800A71A14 Ffma
    temp_169 = fma(temp_100, temp_136, fp_c6.data[2].z);
    // 0x0005D0: 0x1E23EA2F9837131A Fmul32i
    temp_170 = temp_162 * 0.318309873;
    // 0x0005D8: 0x59A10B0001671519 Ffma
    temp_171 = 0.0 - temp_164;
    temp_172 = fma(temp_165, temp_171, temp_164);
    // 0x0005E8: 0x49A1029408270518 Ffma
    temp_173 = 0.0 - fp_c5.data[32].z;
    temp_174 = fma(temp_166, temp_173, temp_166);
    // 0x0005F0: 0x4C68101808D71213 Fmul
    temp_175 = temp_157 * fp_c6.data[35].y;
    // 0x0005F8: 0x59A10B8001771516 Ffma
    temp_176 = 0.0 - temp_167;
    temp_177 = fma(temp_165, temp_176, temp_167);
    // 0x000608: 0x4C68101408270505 Fmul
    temp_178 = temp_166 * fp_c5.data[32].z;
    // 0x000610: 0x59A10D0001A71517 Ffma
    temp_179 = 0.0 - temp_170;
    temp_180 = fma(temp_165, temp_179, temp_170);
    // 0x000618: 0x4C68101808E71212 Fmul
    temp_181 = temp_157 * fp_c6.data[35].z;
    // 0x000628: 0x5C58100001971815 Fadd
    temp_182 = temp_174 + temp_172;
    // 0x000630: 0x33A00DC000070619 Ffma
    temp_183 = fma(temp_154, -2.0, 3.0);
    // 0x000638: 0x49A1091408271218 Ffma
    temp_184 = 0.0 - fp_c5.data[32].z;
    temp_185 = fma(temp_181, temp_184, temp_181);
    // 0x000648: 0x5C68100000670606 Fmul
    temp_186 = temp_154 * temp_154;
    // 0x000650: 0x5C58100001771817 Fadd
    temp_187 = temp_185 + temp_180;
    // 0x000658: 0x5C68100000671906 Fmul
    temp_188 = temp_183 * temp_186;
    // 0x000668: 0x4C68101803770606 Fmul
    temp_189 = temp_188 * fp_c6.data[13].w;
    // 0x000670: 0xF0F0000034470000 Depbar
    // 0x000678: 0x49A0000400171100 Ffma
    temp_190 = fma(temp_163, fp_c1.data[0].y, temp_80);
    // 0x000688: 0x49A1099408271311 Ffma
    temp_191 = 0.0 - fp_c5.data[32].z;
    temp_192 = fma(temp_175, temp_191, temp_175);
    // 0x000690: 0x49A0010400171414 Ffma
    temp_193 = fma(temp_169, fp_c1.data[0].y, temp_82);
    // 0x000698: 0xE043FF8F0037FF02 Ipa
    temp_194 = in_attr7.x;
    // 0x0006A8: 0x49A0008400171010 Ffma
    temp_195 = fma(temp_168, fp_c1.data[0].y, temp_81);
    // 0x0006B0: 0x4C68101408271301 Fmul
    temp_196 = temp_175 * fp_c5.data[32].z;
    // 0x0006B8: 0x5C58100000071500 Fadd
    temp_197 = temp_182 + temp_190;
    // 0x0006C8: 0x5C58100001671111 Fadd
    temp_198 = temp_192 + temp_177;
    // 0x0006D0: 0x5C58100001471714 Fadd
    temp_199 = temp_187 + temp_193;
    // 0x0006D8: 0xF0F0000034370000 Depbar
    // 0x0006E8: 0x59A0028000A70000 Ffma
    temp_200 = fma(temp_197, temp_84, temp_178);
    // 0x0006F0: 0x5C58100001071110 Fadd
    temp_201 = temp_198 + temp_195;
    // 0x0006F8: 0x4C68101408271211 Fmul
    temp_202 = temp_181 * fp_c5.data[32].z;
    // 0x000708: 0x385C103F80070A0A Fadd
    temp_203 = temp_84 + 1.0;
    temp_204 = clamp(temp_203, 0.0, 1.0);
    // 0x000710: 0x4C98079406B70012 Mov
    // 0x000718: 0x59A0008000B71001 Ffma
    temp_205 = fma(temp_201, temp_85, temp_196);
    // 0x000728: 0x385C103F80070B0B Fadd
    temp_206 = temp_85 + 1.0;
    temp_207 = clamp(temp_206, 0.0, 1.0);
    // 0x000730: 0x5C68100000070A00 Fmul
    temp_208 = temp_204 * temp_200;
    // 0x000738: 0x4C68101809D7120A Fmul
    temp_209 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x000748: 0x4C68101809C71205 Fmul
    temp_210 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x000750: 0x4C68101809E71210 Fmul
    temp_211 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x000758: 0x4C9807980B470012 Mov
    // 0x000768: 0x5C68100000170B01 Fmul
    temp_212 = temp_207 * temp_205;
    // 0x000770: 0x59A0088000E71411 Ffma
    temp_213 = fma(temp_199, temp_86, temp_202);
    // 0x000778: 0x5C68100000D70A0A Fmul
    temp_214 = temp_209 * temp_89;
    // 0x000788: 0x5C68100000C70505 Fmul
    temp_215 = temp_210 * temp_88;
    // 0x000790: 0x4C9807980287000D Mov
    // 0x000798: 0x51A209180B470808 Ffma
    temp_216 = 0.0 - fp_c6.data[45].x;
    temp_217 = fma(temp_92, fp_c6.data[45].x, temp_216);
    // 0x0007A8: 0x51A209180B470909 Ffma
    temp_218 = 0.0 - fp_c6.data[45].x;
    temp_219 = fma(temp_93, fp_c6.data[45].x, temp_218);
    // 0x0007B0: 0x385C103F80070E0E Fadd
    temp_220 = temp_86 + 1.0;
    temp_221 = clamp(temp_220, 0.0, 1.0);
    // 0x0007B8: 0x49A0009406C70A01 Ffma
    temp_222 = fma(temp_214, fp_c5.data[27].x, temp_212);
    // 0x0007C8: 0x4C9807980297000A Mov
    // 0x0007D0: 0x49A501180BC7040B Ffma
    temp_223 = 0.0 - fp_c6.data[47].x;
    temp_224 = fma(temp_95, temp_223, temp_194);
    temp_225 = clamp(temp_224, 0.0, 1.0);
    // 0x0007D8: 0x49A0001406C70500 Ffma
    temp_226 = fma(temp_215, fp_c5.data[27].x, temp_208);
    // 0x0007E8: 0x5080000000370B0B Mufu
    temp_227 = log2(temp_225);
    // 0x0007F0: 0x51A0069802870805 Ffma
    temp_228 = fma(temp_217, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0007F8: 0xE043FF8C8037FF0D Ipa
    temp_229 = in_attr4.z;
    // 0x000808: 0x5C68100001170E0E Fmul
    temp_230 = temp_221 * temp_213;
    // 0x000810: 0x51A0051802970904 Ffma
    temp_231 = fma(temp_219, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000818: 0x5C68100000F7100F Fmul
    temp_232 = temp_211 * temp_90;
    // 0x000828: 0x51A209180B470707 Ffma
    temp_233 = 0.0 - fp_c6.data[45].x;
    temp_234 = fma(temp_94, fp_c6.data[45].x, temp_233);
    // 0x000830: 0x4C98079802A7000C Mov
    // 0x000838: 0x5C58300000570008 Fadd
    temp_235 = 0.0 - temp_228;
    temp_236 = temp_226 + temp_235;
    // 0x000848: 0x5C58300000470109 Fadd
    temp_237 = 0.0 - temp_231;
    temp_238 = temp_222 + temp_237;
    // 0x000850: 0x49A0071406C70F02 Ffma
    temp_239 = fma(temp_232, fp_c5.data[27].x, temp_230);
    // 0x000858: 0x51A0061802A70707 Ffma
    temp_240 = fma(temp_234, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000868: 0x4C68101803170B0C Fmul
    temp_241 = temp_227 * fp_c6.data[12].y;
    // 0x000870: 0x49A002980BF7080A Ffma
    temp_242 = fma(temp_236, fp_c6.data[47].w, temp_228);
    // 0x000878: 0x49A002180BF70909 Ffma
    temp_243 = fma(temp_238, fp_c6.data[47].w, temp_231);
    // 0x000888: 0x49A203180357060B Ffma
    temp_244 = 0.0 - temp_189;
    temp_245 = fma(temp_189, fp_c6.data[13].y, temp_244);
    // 0x000890: 0x5C58300000770208 Fadd
    temp_246 = 0.0 - temp_240;
    temp_247 = temp_239 + temp_246;
    // 0x000898: 0x5C90008000C7000C Rro
    // 0x0008A8: 0x5C60178000970409 Fmnmx
    temp_248 = max(temp_231, temp_243);
    // 0x0008B0: 0x5080000000270C0C Mufu
    temp_249 = exp2(temp_241);
    // 0x0008B8: 0x49A2031803470604 Ffma
    temp_250 = 0.0 - temp_189;
    temp_251 = fma(temp_189, fp_c6.data[13].x, temp_250);
    // 0x0008C8: 0x5C60178000A7050A Fmnmx
    temp_252 = max(temp_228, temp_242);
    // 0x0008D0: 0x49A003980BF70808 Ffma
    temp_253 = fma(temp_247, fp_c6.data[47].w, temp_240);
    // 0x0008D8: 0x49A2031803670606 Ffma
    temp_254 = 0.0 - temp_189;
    temp_255 = fma(temp_189, fp_c6.data[13].z, temp_254);
    // 0x0008E8: 0x59A0050000470A03 Ffma
    temp_256 = fma(temp_252, temp_251, temp_252);
    // 0x0008F0: 0x5C60178000870708 Fmnmx
    temp_257 = max(temp_240, temp_253);
    // 0x0008F8: 0x59A0048000B70904 Ffma
    temp_258 = fma(temp_248, temp_245, temp_248);
    // 0x000908: 0x0103F8000007F007 Mov32i
    // 0x000910: 0x5C59100000370003 Fadd
    temp_259 = 0.0 - temp_226;
    temp_260 = temp_259 + temp_256;
    // 0x000918: 0x59A0040000670805 Ffma
    temp_261 = fma(temp_257, temp_255, temp_257);
    // 0x000928: 0x4C68101802B70C06 Fmul
    temp_262 = temp_249 * fp_c6.data[10].w;
    // 0x000930: 0x5C59100000470104 Fadd
    temp_263 = 0.0 - temp_222;
    temp_264 = temp_263 + temp_258;
    // 0x000938: 0x5C59100000570205 Fadd
    temp_265 = 0.0 - temp_239;
    temp_266 = temp_265 + temp_261;
    // 0x000948: 0x59A0000000670300 Ffma
    temp_267 = fma(temp_260, temp_262, temp_226);
    // 0x000950: 0x59A0008000670401 Ffma
    temp_268 = fma(temp_264, temp_262, temp_222);
    // 0x000958: 0x4C58100C03870D04 Fadd
    temp_269 = temp_229 + fp_c3.data[14].x;
    // 0x000968: 0x0103F8000007F003 Mov32i
    // 0x000970: 0x59A0010000670502 Ffma
    temp_270 = fma(temp_266, temp_262, temp_239);
    // 0x000978: 0x0103F6000007F005 Mov32i
    // 0x000988: 0x5C9807800FF70006 Mov
    // 0x000990: 0x49A37F8C03C70404 Ffma
    temp_271 = 0.0 - fp_c3.data[15].x;
    temp_272 = fma(temp_269, temp_271, -0.0);
    // 0x000998: 0xE30000000007000F Exit
    out_attr0.x = temp_267;
    out_attr0.y = temp_268;
    out_attr0.z = temp_270;
    out_attr0.w = 1.0;
    out_attr1.x = temp_272;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
