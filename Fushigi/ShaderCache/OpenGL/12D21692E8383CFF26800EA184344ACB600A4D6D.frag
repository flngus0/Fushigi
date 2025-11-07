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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

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

layout (binding = 0) uniform sampler2D fp_t_tcb_8;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform samplerCube fp_t_tcb_16;
layout (binding = 3) uniform sampler2D fp_t_tcb_34;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform sampler2D fp_t_tcb_32;
layout (binding = 6) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;
layout (location = 9) in vec4 in_attr9;

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
    precise vec2 temp_9;
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
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
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
    precise vec3 temp_95;
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
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    // 0x000008: 0x4C98079C02070017 Mov
    // 0x000010: 0xE003FF87CFF7FF0B Ipa
    // 0x000018: 0x5080000000470B0B Mufu
    // 0x000028: 0xE043FF8E80B7FF02 Ipa
    temp_0 = in_attr6.z;
    // 0x000030: 0xE043FF8EC0B7FF03 Ipa
    temp_1 = in_attr6.w;
    // 0x000038: 0xD830008FF0370202 Texs
    temp_2 = texture(fp_t_tcb_8, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xE043FF8E00B7FF0D Ipa
    temp_5 = in_attr6.x;
    // 0x000050: 0xE043FF8E40B7FF00 Ipa
    temp_6 = in_attr6.y;
    // 0x000058: 0x49A006940587020D Ffma
    temp_7 = fma(temp_3, fp_c5.data[22].x, temp_5);
    // 0x000068: 0x49A000140597030F Ffma
    temp_8 = fma(temp_4, fp_c5.data[22].y, temp_6);
    // 0x000070: 0xD830026FF0F70D00 Texs
    temp_9 = texture(fp_t_tcb_26, vec2(temp_7, temp_8)).xy;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    // 0x000078: 0xE043FF8A00B7FF05 Ipa
    temp_12 = in_attr2.x;
    // 0x000088: 0xE043FF8A40B7FF06 Ipa
    temp_13 = in_attr2.y;
    // 0x000090: 0xE043FF8A80B7FF07 Ipa
    temp_14 = in_attr2.z;
    // 0x000098: 0xE043FF8900B7FF09 Ipa
    temp_15 = in_attr1.x;
    // 0x0000A8: 0xE043FF8940B7FF0C Ipa
    temp_16 = in_attr1.y;
    // 0x0000B0: 0xE043FF8800B7FF02 Ipa
    temp_17 = in_attr0.x;
    // 0x0000B8: 0xE043FF8980B7FF0E Ipa
    temp_18 = in_attr1.z;
    // 0x0000C8: 0xE043FF8840B7FF03 Ipa
    temp_19 = in_attr0.y;
    // 0x0000D0: 0x5C68100000570504 Fmul
    temp_20 = temp_12 * temp_12;
    // 0x0000D8: 0x5C6810000097090A Fmul
    temp_21 = temp_15 * temp_15;
    // 0x0000E8: 0x5C68100000270212 Fmul
    temp_22 = temp_17 * temp_17;
    // 0x0000F0: 0x59A0020000670608 Ffma
    temp_23 = fma(temp_13, temp_13, temp_20);
    // 0x0000F8: 0xE043FF8880B7FF04 Ipa
    temp_24 = in_attr0.z;
    // 0x000108: 0x59A0050000C70C10 Ffma
    temp_25 = fma(temp_16, temp_16, temp_21);
    // 0x000110: 0x59A0090000370312 Ffma
    temp_26 = fma(temp_19, temp_19, temp_22);
    // 0x000118: 0x59A0040000770708 Ffma
    temp_27 = fma(temp_14, temp_14, temp_23);
    // 0x000128: 0x5080000000570808 Mufu
    temp_28 = inversesqrt(temp_27);
    // 0x000130: 0x59A0080000E70E10 Ffma
    temp_29 = fma(temp_18, temp_18, temp_25);
    // 0x000138: 0x5080000000571013 Mufu
    temp_30 = inversesqrt(temp_29);
    // 0x000148: 0x5C6810000087060A Fmul
    temp_31 = temp_13 * temp_28;
    // 0x000150: 0x5C68100000870706 Fmul
    temp_32 = temp_14 * temp_28;
    // 0x000158: 0x5C68100000870507 Fmul
    temp_33 = temp_12 * temp_28;
    // 0x000168: 0xE043FF9100B7FF08 Ipa
    temp_34 = in_attr9.x;
    // 0x000170: 0x5C68100001370909 Fmul
    temp_35 = temp_15 * temp_30;
    // 0x000178: 0x5C68100001370C11 Fmul
    temp_36 = temp_16 * temp_30;
    // 0x000188: 0x5C68100001370E13 Fmul
    temp_37 = temp_18 * temp_30;
    // 0x000190: 0x59A0090000470412 Ffma
    temp_38 = fma(temp_24, temp_24, temp_26);
    // 0x000198: 0x5080000000571215 Mufu
    temp_39 = inversesqrt(temp_38);
    // 0x0001A8: 0x5C68100001570202 Fmul
    temp_40 = temp_17 * temp_39;
    // 0x0001B0: 0x5C68100001570303 Fmul
    temp_41 = temp_19 * temp_39;
    // 0x0001B8: 0x5C68100001570404 Fmul
    temp_42 = temp_24 * temp_39;
    // 0x0001C8: 0x5C68100000170105 Fmul
    temp_43 = temp_11 * temp_11;
    // 0x0001D0: 0x5C68100000770107 Fmul
    temp_44 = temp_11 * temp_33;
    // 0x0001D8: 0x5C68100000A7010A Fmul
    temp_45 = temp_11 * temp_31;
    // 0x0001E8: 0x5C68100000670106 Fmul
    temp_46 = temp_11 * temp_32;
    // 0x0001F0: 0x59A0028000070005 Ffma
    temp_47 = fma(temp_10, temp_10, temp_43);
    // 0x0001F8: 0x59A0038000970007 Ffma
    temp_48 = fma(temp_10, temp_35, temp_44);
    // 0x000208: 0xE043FF9140B7FF09 Ipa
    temp_49 = in_attr9.y;
    // 0x000210: 0x59A005000117000A Ffma
    temp_50 = fma(temp_10, temp_36, temp_45);
    // 0x000218: 0x59A0030001370006 Ffma
    temp_51 = fma(temp_10, temp_37, temp_46);
    // 0x000228: 0x385D103F80070505 Fadd
    temp_52 = 0.0 - temp_47;
    temp_53 = temp_52 + 1.0;
    temp_54 = clamp(temp_53, 0.0, 1.0);
    // 0x000230: 0x5080000000870505 Mufu
    temp_55 = sqrt(temp_54);
    // 0x000238: 0x59A0038000270502 Ffma
    temp_56 = fma(temp_55, temp_40, temp_48);
    // 0x000248: 0x59A0050000370503 Ffma
    temp_57 = fma(temp_55, temp_41, temp_50);
    // 0x000250: 0xE043FF9180B7FF0A Ipa
    temp_58 = in_attr9.z;
    // 0x000258: 0x59A0030000470504 Ffma
    temp_59 = fma(temp_55, temp_42, temp_51);
    // 0x000268: 0xE003FF874FF7FF05 Ipa
    temp_60 = gl_FragCoord.y;
    temp_61 = support_buffer.render_scale[0];
    temp_62 = temp_60 / temp_61;
    // 0x000270: 0x5C68100000270200 Fmul
    temp_63 = temp_56 * temp_56;
    // 0x000278: 0x59A0000000370301 Ffma
    temp_64 = fma(temp_57, temp_57, temp_63);
    // 0x000288: 0xE003FF870FF7FF00 Ipa
    temp_65 = gl_FragCoord.x;
    temp_66 = support_buffer.render_scale[0];
    temp_67 = temp_65 / temp_66;
    // 0x000290: 0x59A0008000470401 Ffma
    temp_68 = fma(temp_59, temp_59, temp_64);
    // 0x000298: 0x5080000000570101 Mufu
    temp_69 = inversesqrt(temp_68);
    // 0x0002A8: 0x4C68100C04B70506 Fmul
    temp_70 = temp_62 * fp_c3.data[18].w;
    // 0x0002B0: 0xE043FF8F40B7FF05 Ipa
    temp_71 = in_attr7.y;
    // 0x0002B8: 0x5C68100000170211 Fmul
    temp_72 = temp_56 * temp_69;
    // 0x0002C8: 0x5C68100000170310 Fmul
    temp_73 = temp_57 * temp_69;
    // 0x0002D0: 0x5C6810000017040E Fmul
    temp_74 = temp_59 * temp_69;
    // 0x0002D8: 0xE043FF8F00B7FF04 Ipa
    temp_75 = in_attr7.x;
    // 0x0002E8: 0x5C62578001071103 Fmnmx
    temp_76 = abs(temp_72);
    temp_77 = abs(temp_73);
    temp_78 = max(temp_76, temp_77);
    // 0x0002F0: 0x5C60578000370E07 Fmnmx
    temp_79 = abs(temp_74);
    temp_80 = max(temp_79, temp_78);
    // 0x0002F8: 0x4C68100C04A70003 Fmul
    temp_81 = temp_67 * fp_c3.data[18].z;
    // 0x000308: 0x5080000000470707 Mufu
    temp_82 = 1.0 / temp_80;
    // 0x000310: 0x5C68100000771100 Fmul
    temp_83 = temp_72 * temp_82;
    // 0x000318: 0x5C68100000771001 Fmul
    temp_84 = temp_73 * temp_82;
    // 0x000328: 0x5C69100000770E02 Fmul
    temp_85 = 0.0 - temp_82;
    temp_86 = temp_74 * temp_85;
    // 0x000330: 0xC0BA0163EFF70000 Tex
    temp_87 = textureLod(fp_t_tcb_16, vec3(temp_83, temp_84, temp_86), 0.0).xyz;
    temp_88 = temp_87.x;
    temp_89 = temp_87.y;
    temp_90 = temp_87.z;
    // 0x000338: 0xD8220340C0570404 Texs
    temp_91 = texture(fp_t_tcb_34, vec2(temp_75, temp_71)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000348: 0xD822020030670306 Texs
    temp_95 = texture(fp_t_tcb_20, vec2(temp_81, temp_70)).xyz;
    temp_96 = temp_95.x;
    temp_97 = temp_95.y;
    temp_98 = temp_95.z;
    // 0x000350: 0xDEBA0000C1770808 TexB
    temp_99 = texture(fp_t_cb7_20, vec3(temp_34, temp_49, temp_58)).x;
    // 0x000358: 0xD822032FF0F70D0D Texs
    temp_100 = texture(fp_t_tcb_32, vec2(temp_7, temp_8)).x;
    // 0x000368: 0xE043FF8C00B7FF12 Ipa
    temp_101 = in_attr4.x;
    // 0x000370: 0xE043FF8C40B7FF13 Ipa
    temp_102 = in_attr4.y;
    // 0x000378: 0xE043FF8C80B7FF14 Ipa
    temp_103 = in_attr4.z;
    // 0x000388: 0x5C68100001271215 Fmul
    temp_104 = temp_101 * temp_101;
    // 0x000390: 0x59A00A8001371315 Ffma
    temp_105 = fma(temp_102, temp_102, temp_104);
    // 0x000398: 0x59A00A8001471415 Ffma
    temp_106 = fma(temp_103, temp_103, temp_105);
    // 0x0003A8: 0x5080000000571515 Mufu
    temp_107 = inversesqrt(temp_106);
    // 0x0003B0: 0x5C69100001571216 Fmul
    temp_108 = 0.0 - temp_107;
    temp_109 = temp_101 * temp_108;
    // 0x0003B8: 0x5C69100001571312 Fmul
    temp_110 = 0.0 - temp_107;
    temp_111 = temp_102 * temp_110;
    // 0x0003C8: 0x4C58301805C7160A Fadd
    temp_112 = 0.0 - fp_c6.data[23].x;
    temp_113 = temp_109 + temp_112;
    // 0x0003D0: 0x5C69100001571409 Fmul
    temp_114 = 0.0 - temp_107;
    temp_115 = temp_103 * temp_114;
    // 0x0003D8: 0x4C58301805D71213 Fadd
    temp_116 = 0.0 - fp_c6.data[23].y;
    temp_117 = temp_111 + temp_116;
    // 0x0003E8: 0x5C68100000A70A18 Fmul
    temp_118 = temp_113 * temp_113;
    // 0x0003F0: 0x4C58301805E70914 Fadd
    temp_119 = 0.0 - fp_c6.data[23].z;
    temp_120 = temp_115 + temp_119;
    // 0x0003F8: 0x59A00C000137130F Ffma
    temp_121 = fma(temp_117, temp_117, temp_118);
    // 0x000408: 0x59A0078001471417 Ffma
    temp_122 = fma(temp_120, temp_120, temp_121);
    // 0x000410: 0x5C6810000167110F Fmul
    temp_123 = temp_72 * temp_109;
    // 0x000418: 0x5080000000571719 Mufu
    temp_124 = inversesqrt(temp_122);
    // 0x000428: 0x59A007800127100F Ffma
    temp_125 = fma(temp_73, temp_111, temp_123);
    // 0x000430: 0x4C98079800970017 Mov
    // 0x000438: 0x59A4078000970E0F Ffma
    temp_126 = fma(temp_74, temp_115, temp_125);
    temp_127 = clamp(temp_126, 0.0, 1.0);
    // 0x000448: 0x5C68100001970A15 Fmul
    temp_128 = temp_113 * temp_124;
    // 0x000450: 0x5C68100001971313 Fmul
    temp_129 = temp_117 * temp_124;
    // 0x000458: 0x4C9807980907000A Mov
    // 0x000468: 0x5C68100001971414 Fmul
    temp_130 = temp_120 * temp_124;
    // 0x000470: 0x5C68100001571615 Fmul
    temp_131 = temp_109 * temp_128;
    // 0x000478: 0x0103F0000007F016 Mov32i
    // 0x000488: 0x51A1051809070F0F Ffma
    temp_132 = 0.0 - fp_c6.data[36].x;
    temp_133 = fma(temp_127, temp_132, fp_c6.data[36].x);
    // 0x000490: 0x5080400000370F0F Mufu
    temp_134 = abs(temp_133);
    temp_135 = log2(temp_134);
    // 0x000498: 0x59A00A8001371213 Ffma
    temp_136 = fma(temp_111, temp_129, temp_131);
    // 0x0004A8: 0x4C68101805C71115 Fmul
    temp_137 = temp_72 * fp_c6.data[23].x;
    // 0x0004B0: 0x59A4098001470913 Ffma
    temp_138 = fma(temp_115, temp_130, temp_136);
    temp_139 = clamp(temp_138, 0.0, 1.0);
    // 0x0004B8: 0x01040DF760C7F009 Mov32i
    // 0x0004C8: 0x4C68101809170F0A Fmul
    temp_140 = temp_135 * fp_c6.data[36].y;
    // 0x0004D0: 0x49A2048400171309 Ffma
    temp_141 = fma(temp_139, fp_c1.data[0].y, -6.98316002);
    // 0x0004D8: 0x5C90008000A70012 Rro
    // 0x0004E8: 0x4C98079809B7000A Mov
    // 0x0004F0: 0x5084000000271212 Mufu
    temp_142 = exp2(temp_140);
    temp_143 = clamp(temp_142, 0.0, 1.0);
    // 0x0004F8: 0x5C68100000971314 Fmul
    temp_144 = temp_139 * temp_141;
    // 0x000508: 0x4C69101805C71113 Fmul
    temp_145 = 0.0 - fp_c6.data[23].x;
    temp_146 = temp_72 * temp_145;
    // 0x000510: 0x4C98079800870009 Mov
    // 0x000518: 0x32A00B3F00071011 Ffma
    temp_147 = fma(temp_73, 0.5, 0.5);
    // 0x000528: 0x4C58101408170A18 Fadd
    temp_148 = fp_c6.data[38].w + fp_c5.data[32].y;
    // 0x000530: 0xE04BFF9040B7FF0A Ipa
    temp_149 = in_attr8.y;
    temp_150 = clamp(temp_149, 0.0, 1.0);
    // 0x000538: 0x5C9000800147000F Rro
    // 0x000548: 0x49A1099805D71013 Ffma
    temp_151 = 0.0 - fp_c6.data[23].y;
    temp_152 = fma(temp_73, temp_151, temp_146);
    // 0x000550: 0x5080000000270F0F Mufu
    temp_153 = exp2(temp_144);
    // 0x000558: 0x4C59101800470916 Fadd
    temp_154 = 0.0 - fp_c6.data[2].x;
    temp_155 = temp_154 + fp_c6.data[1].x;
    // 0x000568: 0x49A5099805E70E14 Ffma
    temp_156 = 0.0 - fp_c6.data[23].z;
    temp_157 = fma(temp_74, temp_156, temp_152);
    temp_158 = clamp(temp_157, 0.0, 1.0);
    // 0x000570: 0x49A00A9805D71013 Ffma
    temp_159 = fma(temp_73, fp_c6.data[23].y, temp_137);
    // 0x000578: 0x4C98079800A70015 Mov
    // 0x000588: 0x5C68100001871210 Fmul
    temp_160 = temp_143 * temp_148;
    // 0x000590: 0x4C59101800571712 Fadd
    temp_161 = 0.0 - fp_c6.data[2].y;
    temp_162 = temp_161 + fp_c6.data[1].y;
    // 0x000598: 0x4C68101801471409 Fmul
    temp_163 = temp_158 * fp_c6.data[5].x;
    // 0x0005A8: 0x49A1079407B70F18 Ffma
    temp_164 = 0.0 - fp_c5.data[30].w;
    temp_165 = fma(temp_153, temp_164, temp_153);
    // 0x0005B0: 0x4C59101800671517 Fadd
    temp_166 = 0.0 - fp_c6.data[2].z;
    temp_167 = temp_166 + fp_c6.data[1].z;
    // 0x0005B8: 0x51A00B180087110F Ffma
    temp_168 = fma(temp_147, temp_155, fp_c6.data[2].x);
    // 0x0005C8: 0x4C68101801571415 Fmul
    temp_169 = temp_158 * fp_c6.data[5].y;
    // 0x0005D0: 0x4C68101801671416 Fmul
    temp_170 = temp_158 * fp_c6.data[5].z;
    // 0x0005D8: 0x1E23EA2F98370919 Fmul32i
    temp_171 = temp_163 * 0.318309873;
    // 0x0005E8: 0x4C58101407B71814 Fadd
    temp_172 = temp_165 + fp_c5.data[30].w;
    // 0x0005F0: 0x4C68101808C71009 Fmul
    temp_173 = temp_160 * fp_c6.data[35].x;
    // 0x0005F8: 0x51A0091800971112 Ffma
    temp_174 = fma(temp_147, temp_162, fp_c6.data[2].y);
    // 0x000608: 0x1E23EA2F9837151A Fmul32i
    temp_175 = temp_169 * 0.318309873;
    // 0x000610: 0x49A0099805E70E15 Ffma
    temp_176 = fma(temp_74, fp_c6.data[23].z, temp_159);
    // 0x000618: 0x4C68101808D7100E Fmul
    temp_177 = temp_160 * fp_c6.data[35].y;
    // 0x000628: 0x59A10C8001971419 Ffma
    temp_178 = 0.0 - temp_171;
    temp_179 = fma(temp_172, temp_178, temp_171);
    // 0x000630: 0x49A1049408270918 Ffma
    temp_180 = 0.0 - fp_c5.data[32].z;
    temp_181 = fma(temp_173, temp_180, temp_173);
    // 0x000638: 0x1E23EA2F9837161B Fmul32i
    temp_182 = temp_170 * 0.318309873;
    // 0x000648: 0x4C68101808E71010 Fmul
    temp_183 = temp_160 * fp_c6.data[35].z;
    // 0x000650: 0x59A10D0001A71416 Ffma
    temp_184 = 0.0 - temp_175;
    temp_185 = fma(temp_172, temp_184, temp_175);
    // 0x000658: 0x5C5C30000FF7151A Fadd
    temp_186 = temp_176 + -0.0;
    temp_187 = clamp(temp_186, 0.0, 1.0);
    // 0x000668: 0x51A00B9800A71111 Ffma
    temp_188 = fma(temp_147, temp_167, fp_c6.data[2].z);
    // 0x000670: 0x5C58100001971813 Fadd
    temp_189 = temp_181 + temp_179;
    // 0x000678: 0x3859503F80071518 Fadd
    temp_190 = abs(temp_176);
    temp_191 = 0.0 - temp_190;
    temp_192 = temp_191 + 1.0;
    // 0x000688: 0x59A10D8001B71414 Ffma
    temp_193 = 0.0 - temp_182;
    temp_194 = fma(temp_172, temp_193, temp_182);
    // 0x000690: 0x5080400000371818 Mufu
    temp_195 = abs(temp_192);
    temp_196 = log2(temp_195);
    // 0x000698: 0x49A1081408271015 Ffma
    temp_197 = 0.0 - fp_c5.data[32].z;
    temp_198 = fma(temp_183, temp_197, temp_183);
    // 0x0006A8: 0x49A1071408270E19 Ffma
    temp_199 = 0.0 - fp_c5.data[32].z;
    temp_200 = fma(temp_177, temp_199, temp_177);
    // 0x0006B0: 0x4C68101408270E0E Fmul
    temp_201 = temp_177 * fp_c5.data[32].z;
    // 0x0006B8: 0x4C68101408270909 Fmul
    temp_202 = temp_173 * fp_c5.data[32].z;
    // 0x0006C8: 0x010404000007F017 Mov32i
    // 0x0006D0: 0x5C68100000A70A1B Fmul
    temp_203 = temp_150 * temp_150;
    // 0x0006D8: 0x5C58100001471514 Fadd
    temp_204 = temp_198 + temp_194;
    // 0x0006E8: 0x5C58100001671916 Fadd
    temp_205 = temp_200 + temp_185;
    // 0x0006F0: 0x0103F8000007F015 Mov32i
    // 0x0006F8: 0x33A00BC000070A0A Ffma
    temp_206 = fma(temp_150, -2.0, 3.0);
    // 0x000708: 0x33A00BC000071A17 Ffma
    temp_207 = fma(temp_187, -2.0, 3.0);
    // 0x000710: 0x4C68101406671818 Fmul
    temp_208 = temp_196 * fp_c5.data[25].z;
    // 0x000718: 0x5C68100001A71A1A Fmul
    temp_209 = temp_187 * temp_187;
    // 0x000728: 0x5C68100001B70A0A Fmul
    temp_210 = temp_206 * temp_203;
    // 0x000730: 0x4C68101803770A0A Fmul
    temp_211 = temp_210 * fp_c6.data[13].w;
    // 0x000738: 0xF0F0000034470000 Depbar
    // 0x000748: 0x49A0000400070F00 Ffma
    temp_212 = fma(temp_168, fp_c1.data[0].x, temp_88);
    // 0x000750: 0x49A0010400071102 Ffma
    temp_213 = fma(temp_188, fp_c1.data[0].x, temp_90);
    // 0x000758: 0x49A0008400071201 Ffma
    temp_214 = fma(temp_174, fp_c1.data[0].x, temp_89);
    // 0x000768: 0x4C68101408271011 Fmul
    temp_215 = temp_183 * fp_c5.data[32].z;
    // 0x000770: 0x5C68100001771A0F Fmul
    temp_216 = temp_209 * temp_207;
    // 0x000778: 0x5C58100001370013 Fadd
    temp_217 = temp_212 + temp_189;
    // 0x000788: 0x5C90008001870000 Rro
    // 0x000790: 0x5C58100001470214 Fadd
    temp_218 = temp_213 + temp_204;
    // 0x000798: 0xE043FF9000B7FF02 Ipa
    temp_219 = in_attr8.x;
    // 0x0007A8: 0x5C58100001670101 Fadd
    temp_220 = temp_214 + temp_205;
    // 0x0007B0: 0x5080000000270000 Mufu
    temp_221 = exp2(temp_208);
    // 0x0007B8: 0x49A0049402C71313 Ffma
    temp_222 = fma(temp_217, fp_c5.data[11].x, temp_202);
    // 0x0007C8: 0x4C5C101402D71509 Fadd
    temp_223 = 1.0 + fp_c5.data[11].y;
    temp_224 = clamp(temp_223, 0.0, 1.0);
    // 0x0007D0: 0x49A0089402E71414 Ffma
    temp_225 = fma(temp_218, fp_c5.data[11].z, temp_215);
    // 0x0007D8: 0x49A0071402D70112 Ffma
    temp_226 = fma(temp_220, fp_c5.data[11].y, temp_201);
    // 0x0007E8: 0x4C5C101402E7150E Fadd
    temp_227 = 1.0 + fp_c5.data[11].z;
    temp_228 = clamp(temp_227, 0.0, 1.0);
    // 0x0007F0: 0x4C5C101402C71501 Fadd
    temp_229 = 1.0 + fp_c5.data[11].x;
    temp_230 = clamp(temp_229, 0.0, 1.0);
    // 0x0007F8: 0x5C68100001270909 Fmul
    temp_231 = temp_224 * temp_226;
    // 0x000808: 0x4C68101801570010 Fmul
    temp_232 = temp_221 * fp_c6.data[5].y;
    // 0x000810: 0x4C68101801470011 Fmul
    temp_233 = temp_221 * fp_c6.data[5].x;
    // 0x000818: 0x5C68100001370101 Fmul
    temp_234 = temp_230 * temp_222;
    // 0x000828: 0x4C98079802870013 Mov
    // 0x000830: 0xF0F0000034270000 Depbar
    // 0x000838: 0x59A1080001070510 Ffma
    temp_235 = 0.0 - temp_232;
    temp_236 = fma(temp_93, temp_235, temp_232);
    // 0x000848: 0x5C68100001470E05 Fmul
    temp_237 = temp_228 * temp_225;
    // 0x000850: 0x59A1088001170411 Ffma
    temp_238 = 0.0 - temp_233;
    temp_239 = fma(temp_92, temp_238, temp_233);
    // 0x000858: 0x4C9807980B470014 Mov
    // 0x000868: 0x4C6810180167000E Fmul
    temp_240 = temp_221 * fp_c6.data[5].z;
    // 0x000870: 0x4C68101406771010 Fmul
    temp_241 = temp_236 * fp_c5.data[25].w;
    // 0x000878: 0x4C68101406771100 Fmul
    temp_242 = temp_239 * fp_c5.data[25].w;
    // 0x000888: 0x51A20A180B470606 Ffma
    temp_243 = 0.0 - fp_c6.data[45].x;
    temp_244 = fma(temp_96, fp_c6.data[45].x, temp_243);
    // 0x000890: 0x59A1070000E70C0C Ffma
    temp_245 = 0.0 - temp_240;
    temp_246 = fma(temp_94, temp_245, temp_240);
    // 0x000898: 0xF0F0000034170000 Depbar
    // 0x0008A8: 0x49A501180BC7080E Ffma
    temp_247 = 0.0 - fp_c6.data[47].x;
    temp_248 = fma(temp_99, temp_247, temp_219);
    temp_249 = clamp(temp_248, 0.0, 1.0);
    // 0x0008B0: 0x51A20A180B470303 Ffma
    temp_250 = 0.0 - fp_c6.data[45].x;
    temp_251 = fma(temp_98, fp_c6.data[45].x, temp_250);
    // 0x0008B8: 0x5080000000370E0E Mufu
    temp_252 = log2(temp_249);
    // 0x0008C8: 0x49A0009406C70000 Ffma
    temp_253 = fma(temp_242, fp_c5.data[27].x, temp_234);
    // 0x0008D0: 0x51A0099802870606 Ffma
    temp_254 = fma(temp_244, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0008D8: 0x4C68101406770C02 Fmul
    temp_255 = temp_246 * fp_c5.data[25].w;
    // 0x0008E8: 0x4C98079802A7000C Mov
    // 0x0008F0: 0x4C98079802970011 Mov
    // 0x0008F8: 0x51A20A180B470707 Ffma
    temp_256 = 0.0 - fp_c6.data[45].x;
    temp_257 = fma(temp_97, fp_c6.data[45].x, temp_256);
    // 0x000908: 0x49A0049406C71001 Ffma
    temp_258 = fma(temp_241, fp_c5.data[27].x, temp_231);
    // 0x000910: 0x5C58300000670008 Fadd
    temp_259 = 0.0 - temp_254;
    temp_260 = temp_253 + temp_259;
    // 0x000918: 0x49A0029406C70202 Ffma
    temp_261 = fma(temp_255, fp_c5.data[27].x, temp_237);
    // 0x000928: 0x51A0061802A70305 Ffma
    temp_262 = fma(temp_251, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000930: 0xE043FF8BC0B7FF03 Ipa
    temp_263 = in_attr3.w;
    // 0x000938: 0x51A0089802970707 Ffma
    temp_264 = fma(temp_257, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000948: 0x4C68101803170E0E Fmul
    temp_265 = temp_252 * fp_c6.data[12].y;
    // 0x000950: 0x49A003180BF70810 Ffma
    temp_266 = fma(temp_260, fp_c6.data[47].w, temp_254);
    // 0x000958: 0xE043FF8D80B7FF08 Ipa
    temp_267 = in_attr5.z;
    // 0x000968: 0x5C5830000057020C Fadd
    temp_268 = 0.0 - temp_262;
    temp_269 = temp_261 + temp_268;
    // 0x000970: 0x5C58300000770109 Fadd
    temp_270 = 0.0 - temp_264;
    temp_271 = temp_258 + temp_270;
    // 0x000978: 0x5C90008000E7000E Rro
    // 0x000988: 0x5C60178001070610 Fmnmx
    temp_272 = max(temp_254, temp_266);
    // 0x000990: 0x5080000000270E0E Mufu
    temp_273 = exp2(temp_265);
    // 0x000998: 0x49A002980BF70C0C Ffma
    temp_274 = fma(temp_269, fp_c6.data[47].w, temp_262);
    // 0x0009A8: 0x5C58100000D70406 Fadd
    temp_275 = temp_92 + temp_100;
    // 0x0009B0: 0x49A003980BF70909 Ffma
    temp_276 = fma(temp_271, fp_c6.data[47].w, temp_264);
    // 0x0009B8: 0x49A2051803570A04 Ffma
    temp_277 = 0.0 - temp_211;
    temp_278 = fma(temp_211, fp_c6.data[13].y, temp_277);
    // 0x0009C8: 0x5C60178000C7050C Fmnmx
    temp_279 = max(temp_262, temp_274);
    // 0x0009D0: 0x49A2051803470A05 Ffma
    temp_280 = 0.0 - temp_211;
    temp_281 = fma(temp_211, fp_c6.data[13].x, temp_280);
    // 0x0009D8: 0x5C60178000970709 Fmnmx
    temp_282 = max(temp_264, temp_276);
    // 0x0009E8: 0x49A2051803670A0A Ffma
    temp_283 = 0.0 - temp_211;
    temp_284 = fma(temp_211, fp_c6.data[13].z, temp_283);
    // 0x0009F0: 0x59A1030000F70D06 Ffma
    temp_285 = 0.0 - temp_216;
    temp_286 = fma(temp_100, temp_285, temp_275);
    // 0x0009F8: 0x59A0080000571005 Ffma
    temp_287 = fma(temp_272, temp_281, temp_272);
    // 0x000A08: 0x59A0048000470904 Ffma
    temp_288 = fma(temp_282, temp_278, temp_282);
    // 0x000A10: 0x59A0060000A70C07 Ffma
    temp_289 = fma(temp_279, temp_284, temp_279);
    // 0x000A18: 0x4C6C101406370606 Fmul
    temp_290 = temp_286 * fp_c5.data[24].w;
    temp_291 = clamp(temp_290, 0.0, 1.0);
    // 0x000A28: 0x4C68101802B70E0A Fmul
    temp_292 = temp_273 * fp_c6.data[10].w;
    // 0x000A30: 0x5C59100000570005 Fadd
    temp_293 = 0.0 - temp_253;
    temp_294 = temp_293 + temp_287;
    // 0x000A38: 0x5C59100000470104 Fadd
    temp_295 = 0.0 - temp_258;
    temp_296 = temp_295 + temp_288;
    // 0x000A48: 0x5C59100000770207 Fadd
    temp_297 = 0.0 - temp_261;
    temp_298 = temp_297 + temp_289;
    // 0x000A50: 0x5C68100000370603 Fmul
    temp_299 = temp_291 * temp_263;
    // 0x000A58: 0x4C58100C03870808 Fadd
    temp_300 = temp_267 + fp_c3.data[14].x;
    // 0x000A68: 0x5C9807800FF70006 Mov
    // 0x000A70: 0x59A0000000A70500 Ffma
    temp_301 = fma(temp_294, temp_292, temp_253);
    // 0x000A78: 0x59A0008000A70401 Ffma
    temp_302 = fma(temp_296, temp_292, temp_258);
    // 0x000A88: 0x59A0010000A70702 Ffma
    temp_303 = fma(temp_298, temp_292, temp_261);
    // 0x000A90: 0x0103F8000007F005 Mov32i
    // 0x000A98: 0x49A37F8C03C70804 Ffma
    temp_304 = 0.0 - fp_c3.data[15].x;
    temp_305 = fma(temp_300, temp_304, -0.0);
    // 0x000AA8: 0x5C98078000370007 Mov
    // 0x000AB0: 0xE30000000007000F Exit
    out_attr0.x = temp_301;
    out_attr0.y = temp_302;
    out_attr0.z = temp_303;
    out_attr0.w = temp_299;
    out_attr1.x = temp_305;
    out_attr1.y = 1.0;
    out_attr1.z = 0.0;
    out_attr1.w = temp_299;
    return;
}
