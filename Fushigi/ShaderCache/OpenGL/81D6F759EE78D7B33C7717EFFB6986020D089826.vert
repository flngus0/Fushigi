#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
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

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 0) uniform sampler2D vp_t_cb7_2A;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
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
    precise vec4 temp_20;
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
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
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
    int temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    int temp_168;
    precise float temp_169;
    int temp_170;
    uint temp_171;
    uint temp_172;
    int temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    int temp_183;
    uint temp_184;
    uint temp_185;
    int temp_186;
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
    int temp_217;
    uint temp_218;
    uint temp_219;
    int temp_220;
    precise float temp_221;
    int temp_222;
    uint temp_223;
    int temp_224;
    precise float temp_225;
    precise float temp_226;
    int temp_227;
    uint temp_228;
    uint temp_229;
    int temp_230;
    precise float temp_231;
    int temp_232;
    uint temp_233;
    int temp_234;
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
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079000370001 Mov
    // 0x000010: 0x4C98079000770003 Mov
    // 0x000018: 0x4C98079000B70007 Mov
    // 0x000028: 0x0103F0000007F009 Mov32i
    // 0x000030: 0x4C9807980D370005 Mov
    // 0x000038: 0x4C68100C01870100 Fmul
    temp_0 = vp_c4.data[0].w * vp_c3.data[6].x;
    // 0x000048: 0x49A0000C01970302 Ffma
    temp_1 = fma(vp_c4.data[1].w, vp_c3.data[6].y, temp_0);
    // 0x000050: 0x4C68100C00C70100 Fmul
    temp_2 = vp_c4.data[0].w * vp_c3.data[3].x;
    // 0x000058: 0x4C68100C01070101 Fmul
    temp_3 = vp_c4.data[0].w * vp_c3.data[4].x;
    // 0x000068: 0x49A0010C01A70702 Ffma
    temp_4 = fma(vp_c4.data[2].w, vp_c3.data[6].z, temp_1);
    // 0x000070: 0x49A0000C00D70300 Ffma
    temp_5 = fma(vp_c4.data[1].w, vp_c3.data[3].y, temp_2);
    // 0x000078: 0x49A0008C01170301 Ffma
    temp_6 = fma(vp_c4.data[1].w, vp_c3.data[4].y, temp_3);
    // 0x000088: 0x4C58100C01B70202 Fadd
    temp_7 = temp_4 + vp_c3.data[6].w;
    // 0x000090: 0x49A0000C00E70700 Ffma
    temp_8 = fma(vp_c4.data[2].w, vp_c3.data[3].z, temp_5);
    // 0x000098: 0x5080000000470202 Mufu
    temp_9 = 1.0 / temp_7;
    // 0x0000A8: 0x49A0008C01270701 Ffma
    temp_10 = fma(vp_c4.data[2].w, vp_c3.data[4].z, temp_6);
    // 0x0000B0: 0x4C58100C00F70000 Fadd
    temp_11 = temp_8 + vp_c3.data[3].w;
    // 0x0000B8: 0x4C58100C01370101 Fadd
    temp_12 = temp_10 + vp_c3.data[4].w;
    // 0x0000C8: 0x5C68100000270003 Fmul
    temp_13 = temp_11 * temp_9;
    // 0x0000D0: 0x5C69100000270100 Fmul
    temp_14 = 0.0 - temp_9;
    temp_15 = temp_12 * temp_14;
    // 0x0000D8: 0x4C9807980D270001 Mov
    // 0x0000E8: 0x32A004BF00070303 Ffma
    temp_16 = fma(temp_13, 0.5, 0.5);
    // 0x0000F0: 0x32A004BF00070000 Ffma
    temp_17 = fma(temp_15, 0.5, 0.5);
    // 0x0000F8: 0x51A000980D070302 Ffma
    temp_18 = fma(temp_16, vp_c6.data[52].z, vp_c6.data[52].x);
    // 0x000108: 0x4C98079C02A70001 Mov
    // 0x000110: 0x51A002980D170003 Ffma
    temp_19 = fma(temp_17, vp_c6.data[52].w, vp_c6.data[52].y);
    // 0x000118: 0xDEB80007A0170200 TexB
    temp_20 = texture(vp_t_cb7_2A, vec2(temp_18, temp_19)).xyzw;
    temp_21 = temp_20.x;
    temp_22 = temp_20.y;
    temp_23 = temp_20.z;
    temp_24 = temp_20.w;
    // 0x000128: 0xEFD87F800A07FF06 Ald
    temp_25 = in_attr2.x;
    // 0x000130: 0x4C9807980CC70004 Mov
    // 0x000138: 0xEFD87F800907FF0F Ald
    temp_26 = in_attr1.x;
    // 0x000148: 0x4C9807980CD70005 Mov
    // 0x000150: 0xEFD87F800A47FF10 Ald
    temp_27 = in_attr2.y;
    // 0x000158: 0x4C9807980CE70014 Mov
    // 0x000168: 0xEFD87F800807FF0E Ald
    temp_28 = in_attr0.x;
    // 0x000170: 0x4C6810180CC70404 Fmul
    temp_29 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000178: 0xEFD87F800947FF0A Ald
    temp_30 = in_attr1.y;
    // 0x000188: 0x49A002180CD70505 Ffma
    temp_31 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_29);
    // 0x000190: 0xEFD87F800847FF0C Ald
    temp_32 = in_attr0.y;
    // 0x000198: 0x4C6810100087060D Fmul
    temp_33 = temp_25 * vp_c4.data[2].x;
    // 0x0001A8: 0xEFD87F800887FF08 Ald
    temp_34 = in_attr0.z;
    // 0x0001B0: 0x4C68101000070607 Fmul
    temp_35 = temp_25 * vp_c4.data[0].x;
    // 0x0001B8: 0xEFD87F800A87FF12 Ald
    temp_36 = in_attr2.z;
    // 0x0001C8: 0x4C68101000470606 Fmul
    temp_37 = temp_25 * vp_c4.data[1].x;
    // 0x0001D0: 0xEFD87F800987FF18 Ald
    temp_38 = in_attr1.z;
    // 0x0001D8: 0x49A002980CE71414 Ffma
    temp_39 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_31);
    // 0x0001E8: 0x4C68101000870F13 Fmul
    temp_40 = temp_26 * vp_c4.data[2].x;
    // 0x0001F0: 0x5080000000571414 Mufu
    temp_41 = inversesqrt(temp_39);
    // 0x0001F8: 0x4C68101000470F0B Fmul
    temp_42 = temp_26 * vp_c4.data[1].x;
    // 0x000208: 0x4C68101000070F0F Fmul
    temp_43 = temp_26 * vp_c4.data[0].x;
    // 0x000210: 0x49A0031000571004 Ffma
    temp_44 = fma(temp_27, vp_c4.data[1].y, temp_37);
    // 0x000218: 0x4C68101000470E06 Fmul
    temp_45 = temp_28 * vp_c4.data[1].x;
    // 0x000228: 0x5C58300000E70E05 Fadd
    temp_46 = 0.0 - temp_28;
    temp_47 = temp_28 + temp_46;
    // 0x000230: 0x49A0099000970A13 Ffma
    temp_48 = fma(temp_30, vp_c4.data[2].y, temp_40);
    // 0x000238: 0x49A0059000570A0B Ffma
    temp_49 = fma(temp_30, vp_c4.data[1].y, temp_42);
    // 0x000248: 0x49A0079000170A0A Ffma
    temp_50 = fma(temp_30, vp_c4.data[0].y, temp_43);
    // 0x000250: 0x49A006900097100D Ffma
    temp_51 = fma(temp_27, vp_c4.data[2].y, temp_33);
    // 0x000258: 0x49A0039000171007 Ffma
    temp_52 = fma(temp_27, vp_c4.data[0].y, temp_35);
    // 0x000268: 0x49A0031000570C0F Ffma
    temp_53 = fma(temp_32, vp_c4.data[1].y, temp_45);
    // 0x000270: 0x5C68100000570510 Fmul
    temp_54 = temp_47 * temp_47;
    // 0x000278: 0x4C68101000070E05 Fmul
    temp_55 = temp_28 * vp_c4.data[0].x;
    // 0x000288: 0x4C6810180CC71415 Fmul
    temp_56 = temp_41 * vp_c6.data[51].x;
    // 0x000290: 0x4C68101000870E0E Fmul
    temp_57 = temp_28 * vp_c4.data[2].x;
    // 0x000298: 0x5C59100000C7FF1A Fadd
    temp_58 = -0.0 + temp_32;
    // 0x0002A8: 0x49A007900067080F Ffma
    temp_59 = fma(temp_34, vp_c4.data[1].z, temp_53);
    // 0x0002B0: 0x49A0069000A7120D Ffma
    temp_60 = fma(temp_36, vp_c4.data[2].z, temp_51);
    // 0x0002B8: 0x49A0029000170C11 Ffma
    temp_61 = fma(temp_32, vp_c4.data[0].y, temp_55);
    // 0x0002C8: 0x49A0039000271207 Ffma
    temp_62 = fma(temp_36, vp_c4.data[0].z, temp_52);
    // 0x0002D0: 0x49A0021000671212 Ffma
    temp_63 = fma(temp_36, vp_c4.data[1].z, temp_44);
    // 0x0002D8: 0x49A0059000671804 Ffma
    temp_64 = fma(temp_38, vp_c4.data[1].z, temp_49);
    // 0x0002E8: 0x4C58101000770F0B Fadd
    temp_65 = temp_59 + vp_c4.data[1].w;
    // 0x0002F0: 0x49A0099000A71813 Ffma
    temp_66 = fma(temp_38, vp_c4.data[2].z, temp_48);
    // 0x0002F8: 0x49A10A980CF7150F Ffma
    temp_67 = 0.0 - vp_c6.data[51].w;
    temp_68 = fma(temp_56, temp_67, temp_56);
    // 0x000308: 0x49A0089000270811 Ffma
    temp_69 = fma(temp_34, vp_c4.data[0].z, temp_61);
    // 0x000310: 0x49A0051000271818 Ffma
    temp_70 = fma(temp_38, vp_c4.data[0].z, temp_50);
    // 0x000318: 0x49A0071000970C0A Ffma
    temp_71 = fma(temp_32, vp_c4.data[2].y, temp_57);
    // 0x000328: 0x4C6810180CE71417 Fmul
    temp_72 = temp_41 * vp_c6.data[51].z;
    // 0x000330: 0x59A0080001A71A1A Ffma
    temp_73 = fma(temp_58, temp_58, temp_54);
    // 0x000338: 0x1E23DCCCCCD70F1B Fmul32i
    temp_74 = temp_68 * 0.100000001;
    // 0x000348: 0x4C58101000371111 Fadd
    temp_75 = temp_69 + vp_c4.data[0].w;
    // 0x000350: 0x4C68101409670B10 Fmul
    temp_76 = temp_65 * vp_c5.data[37].z;
    // 0x000358: 0x49A003100057FF0F Ffma
    temp_77 = fma(0.0, vp_c4.data[1].y, temp_45);
    // 0x000368: 0x49A007100097FF0E Ffma
    temp_78 = fma(0.0, vp_c4.data[2].y, temp_57);
    // 0x000370: 0x49A0051000A70806 Ffma
    temp_79 = fma(temp_34, vp_c4.data[2].z, temp_71);
    // 0x000378: 0x49A10B980CF7170C Ffma
    temp_80 = 0.0 - vp_c6.data[51].w;
    temp_81 = fma(temp_72, temp_80, temp_72);
    // 0x000388: 0x49A002900017FF16 Ffma
    temp_82 = fma(0.0, vp_c4.data[0].y, temp_55);
    // 0x000390: 0x59A1080001B7110A Ffma
    temp_83 = 0.0 - temp_74;
    temp_84 = fma(temp_75, temp_83, temp_76);
    // 0x000398: 0x49A007900067080F Ffma
    temp_85 = fma(temp_34, vp_c4.data[1].z, temp_77);
    // 0x0003A8: 0x49A0071000A7080E Ffma
    temp_86 = fma(temp_34, vp_c4.data[2].z, temp_78);
    // 0x0003B0: 0x4C58101000B70605 Fadd
    temp_87 = temp_79 + vp_c4.data[2].w;
    // 0x0003B8: 0x1E23DCCCCCD70C1B Fmul32i
    temp_88 = temp_81 * 0.100000001;
    // 0x0003C8: 0x49A00B100027080C Ffma
    temp_89 = fma(temp_34, vp_c4.data[0].z, temp_82);
    // 0x0003D0: 0x5C68100001871816 Fmul
    temp_90 = temp_70 * temp_70;
    // 0x0003D8: 0x5C68100000770719 Fmul
    temp_91 = temp_62 * temp_62;
    // 0x0003E8: 0x4C58101000B70E10 Fadd
    temp_92 = temp_86 + vp_c4.data[2].w;
    // 0x0003F0: 0x4C58101000770F06 Fadd
    temp_93 = temp_85 + vp_c4.data[1].w;
    // 0x0003F8: 0x59A0050001B7050A Ffma
    temp_94 = fma(temp_87, temp_88, temp_84);
    // 0x000408: 0x4C58101000370C0C Fadd
    temp_95 = temp_89 + vp_c4.data[0].w;
    // 0x000410: 0x59A00B0000470416 Ffma
    temp_96 = fma(temp_64, temp_64, temp_90);
    // 0x000418: 0x59A00C800127121B Ffma
    temp_97 = fma(temp_63, temp_63, temp_91);
    // 0x000428: 0x5C5830000107051D Fadd
    temp_98 = 0.0 - temp_92;
    temp_99 = temp_87 + temp_98;
    // 0x000430: 0x5C58300000670B1C Fadd
    temp_100 = 0.0 - temp_93;
    temp_101 = temp_65 + temp_100;
    // 0x000438: 0x49A0051C23070909 Ffma
    temp_102 = fma(0.5, vp_c7.data[140].x, temp_94);
    // 0x000448: 0x5C58300000C7110A Fadd
    temp_103 = 0.0 - temp_95;
    temp_104 = temp_75 + temp_103;
    // 0x000450: 0x5C5830000087080F Fadd
    temp_105 = 0.0 - temp_34;
    temp_106 = temp_34 + temp_105;
    // 0x000458: 0x59A00B000137130E Ffma
    temp_107 = fma(temp_66, temp_66, temp_96);
    // 0x000468: 0x59A00D8000D70D08 Ffma
    temp_108 = fma(temp_60, temp_60, temp_97);
    // 0x000470: 0x5080000000570E0E Mufu
    temp_109 = inversesqrt(temp_107);
    // 0x000478: 0x59A20E0001D7FF16 Ffma
    temp_110 = 0.0 - temp_101;
    temp_111 = fma(0.0, temp_99, temp_110);
    // 0x000488: 0x5080000000570808 Mufu
    temp_112 = inversesqrt(temp_108);
    // 0x000490: 0x59A1050001D7FF1D Ffma
    temp_113 = 0.0 - temp_99;
    temp_114 = fma(0.0, temp_113, temp_104);
    // 0x000498: 0x5C69100000A7FF0A Fmul
    temp_115 = 0.0 - temp_104;
    temp_116 = 0.0 * temp_115;
    // 0x0004A8: 0x4C6810180CD71414 Fmul
    temp_117 = temp_41 * vp_c6.data[51].y;
    // 0x0004B0: 0x5C9000000097001B Rro
    // 0x0004B8: 0x38681040A0070919 Fmul
    temp_118 = temp_102 * 5.0;
    // 0x0004C8: 0x5080000000071B1B Mufu
    temp_119 = cos(temp_102);
    // 0x0004D0: 0x5C68100001571616 Fmul
    temp_120 = temp_111 * temp_56;
    // 0x0004D8: 0x59A0050001C7FF1C Ffma
    temp_121 = fma(0.0, temp_101, temp_116);
    // 0x0004E8: 0x386810404007090A Fmul
    temp_122 = temp_102 * 3.0;
    // 0x0004F0: 0x59A00D0000F70F1A Ffma
    temp_123 = fma(temp_106, temp_106, temp_73);
    // 0x0004F8: 0x5C68100000E71818 Fmul
    temp_124 = temp_70 * temp_109;
    // 0x000508: 0x5080000000871A1A Mufu
    temp_125 = sqrt(temp_123);
    // 0x000510: 0x59A00B0001471D1D Ffma
    temp_126 = fma(temp_114, temp_117, temp_120);
    // 0x000518: 0x5C68100000E70416 Fmul
    temp_127 = temp_64 * temp_109;
    // 0x000528: 0x5C68100000870704 Fmul
    temp_128 = temp_62 * temp_112;
    // 0x000530: 0x5C90000000A70007 Rro
    // 0x000538: 0xEFD87F800AC7FF0A Ald
    temp_129 = in_attr2.w;
    // 0x000548: 0x5C68100000871212 Fmul
    temp_130 = temp_63 * temp_112;
    // 0x000550: 0x5080000000070707 Mufu
    temp_131 = cos(temp_122);
    // 0x000558: 0x5C90000001970019 Rro
    // 0x000568: 0x5C68100001B71B1E Fmul
    temp_132 = temp_119 * temp_119;
    // 0x000570: 0x5080000000071919 Mufu
    temp_133 = cos(temp_118);
    // 0x000578: 0x5C6810000167040F Fmul
    temp_134 = temp_128 * temp_127;
    // 0x000588: 0x5C68100000870D0D Fmul
    temp_135 = temp_60 * temp_112;
    // 0x000590: 0xEFD87F801007FF08 Ald
    temp_136 = in_attr8.x;
    // 0x000598: 0x5C68100000E71313 Fmul
    temp_137 = temp_66 * temp_109;
    // 0x0005A8: 0xEFD87F801047FF0E Ald
    temp_138 = in_attr8.y;
    // 0x0005B0: 0x5C59100001071010 Fadd
    temp_139 = 0.0 - temp_92;
    temp_140 = temp_139 + temp_92;
    // 0x0005B8: 0xEFF07F800807FF18 Ast
    out_attr0.x = temp_124;
    // 0x0005C8: 0x5C68100000771E07 Fmul
    temp_141 = temp_132 * temp_131;
    // 0x0005D0: 0xEFF07F800947FF12 Ast
    out_attr1.y = temp_130;
    // 0x0005D8: 0x59A00E8001771C1C Ffma
    temp_142 = fma(temp_121, temp_72, temp_126);
    // 0x0005E8: 0xEFF07F800887FF13 Ast
    out_attr0.z = temp_137;
    // 0x0005F0: 0x59A207800187120F Ffma
    temp_143 = 0.0 - temp_134;
    temp_144 = fma(temp_130, temp_124, temp_143);
    // 0x0005F8: 0xEFF07F800987FF0D Ast
    out_attr1.z = temp_135;
    // 0x000608: 0x5C68100001870D1D Fmul
    temp_145 = temp_135 * temp_124;
    // 0x000610: 0xEFF07F800907FF04 Ast
    out_attr1.x = temp_128;
    // 0x000618: 0x5C68120001970707 Fmul
    temp_146 = temp_141 * 0.5;
    temp_147 = temp_146 * temp_133;
    // 0x000628: 0xEFF07F800847FF16 Ast
    out_attr0.y = temp_127;
    // 0x000630: 0x5C6810000137121B Fmul
    temp_148 = temp_130 * temp_137;
    // 0x000638: 0x5C58100001070518 Fadd
    temp_149 = temp_87 + temp_140;
    // 0x000648: 0x5C68100001A71519 Fmul
    temp_150 = temp_56 * temp_125;
    // 0x000650: 0x4C98079C23070010 Mov
    // 0x000658: 0x32A008BF00070B15 Ffma
    temp_151 = fma(temp_65, 0.5, temp_75);
    // 0x000668: 0x59A20E800137041D Ffma
    temp_152 = 0.0 - temp_145;
    temp_153 = fma(temp_128, temp_137, temp_152);
    // 0x000670: 0x59A20D8001670D1B Ffma
    temp_154 = 0.0 - temp_148;
    temp_155 = fma(temp_135, temp_127, temp_154);
    // 0x000678: 0x5C68100000A70F12 Fmul
    temp_156 = temp_144 * temp_129;
    // 0x000688: 0x4CB0119002371A0F F2i
    temp_157 = trunc(vp_c4.data[8].w);
    temp_158 = int(temp_157);
    // 0x000690: 0x4C68101409770909 Fmul
    temp_159 = temp_102 * vp_c5.data[37].w;
    // 0x000698: 0xEFF07F800A87FF12 Ast
    out_attr2.z = temp_156;
    // 0x0006A8: 0x49A00A9407571010 Ffma
    temp_160 = fma(vp_c7.data[140].x, vp_c5.data[29].y, temp_151);
    // 0x0006B0: 0x5C68100000A71B1B Fmul
    temp_161 = temp_155 * temp_129;
    // 0x0006B8: 0x5C68100000A71D1D Fmul
    temp_162 = temp_153 * temp_129;
    // 0x0006C8: 0xEFF07F800A07FF1B Ast
    out_attr2.x = temp_161;
    // 0x0006D0: 0x5C90000001070013 Rro
    // 0x0006D8: 0xEFF07F800A47FF1D Ast
    out_attr2.y = temp_162;
    // 0x0006E8: 0x5C90000000970009 Rro
    // 0x0006F0: 0x508000000007130D Mufu
    temp_163 = cos(temp_160);
    // 0x0006F8: 0x4C9807940957001E Mov
    // 0x000708: 0x5080000000170909 Mufu
    temp_164 = sin(temp_159);
    // 0x000710: 0x5C68100001A7171F Fmul
    temp_165 = temp_72 * temp_125;
    // 0x000718: 0x5C68100001A71417 Fmul
    temp_166 = temp_117 * temp_125;
    // 0x000728: 0x59A00C0000B7FF18 Ffma
    temp_167 = fma(0.0, temp_65, temp_149);
    // 0x000730: 0x3848000000470F0F Shl
    temp_168 = temp_158 << 4;
    // 0x000738: 0x4C6810180CF71E1E Fmul
    temp_169 = vp_c5.data[37].y * vp_c6.data[51].w;
    // 0x000748: 0xEF94007048870F12 Ldc
    temp_170 = temp_168 + 0x488;
    temp_171 = uint(temp_170) >> 2;
    temp_172 = temp_171 >> 2;
    temp_173 = int(temp_171) & 3;
    temp_174 = vp_c7.data[int(temp_172)][temp_173];
    // 0x000750: 0x4C68101407670D0D Fmul
    temp_175 = temp_163 * vp_c5.data[29].z;
    // 0x000758: 0x5C68100001971E14 Fmul
    temp_176 = temp_169 * temp_150;
    // 0x000768: 0x1E23DCCCCCD70919 Fmul32i
    temp_177 = temp_164 * 0.100000001;
    // 0x000770: 0x5C68100001F71E1F Fmul
    temp_178 = temp_169 * temp_165;
    // 0x000778: 0x5C68100001771E16 Fmul
    temp_179 = temp_169 * temp_166;
    // 0x000788: 0x59A10C000117FF09 Ffma
    temp_180 = 0.0 - temp_75;
    temp_181 = fma(0.0, temp_180, temp_167);
    // 0x000790: 0x5C68100001470704 Fmul
    temp_182 = temp_147 * temp_176;
    // 0x000798: 0xEF94007068870F14 Ldc
    temp_183 = temp_168 + 0x688;
    temp_184 = uint(temp_183) >> 2;
    temp_185 = temp_184 >> 2;
    temp_186 = int(temp_184) & 3;
    temp_187 = vp_c7.data[int(temp_185)][temp_186];
    // 0x0007A8: 0x59A00C8000771C1C Ffma
    temp_188 = fma(temp_142, temp_147, temp_177);
    // 0x0007B0: 0x5C68100001F7071F Fmul
    temp_189 = temp_147 * temp_178;
    // 0x0007B8: 0x5C68100001670707 Fmul
    temp_190 = temp_147 * temp_179;
    // 0x0007C8: 0x49A0048400071F09 Ffma
    temp_191 = fma(temp_189, vp_c1.data[0].x, temp_181);
    // 0x0007D0: 0x1E23CF5C28F70707 Fmul32i
    temp_192 = temp_190 * 0.0299999993;
    // 0x0007D8: 0x59A00A0001270909 Ffma
    temp_193 = fma(temp_191, temp_174, temp_187);
    // 0x0007E8: 0xEFF07F800D87FF09 Ast
    out_attr5.z = temp_193;
    // 0x0007F0: 0x5C6810000007000A Fmul
    temp_194 = temp_21 * temp_21;
    // 0x0007F8: 0x5C58100000270000 Fadd
    temp_195 = temp_21 + temp_23;
    // 0x000808: 0x5C58100000370103 Fadd
    temp_196 = temp_22 + temp_24;
    // 0x000810: 0x59A0050000170110 Ffma
    temp_197 = fma(temp_22, temp_22, temp_194);
    // 0x000818: 0x5084000000871010 Mufu
    temp_198 = sqrt(temp_197);
    temp_199 = clamp(temp_198, 0.0, 1.0);
    // 0x000828: 0x5C68100001070D0D Fmul
    temp_200 = temp_175 * temp_199;
    // 0x000830: 0x49A006940747000D Ffma
    temp_201 = fma(temp_195, vp_c5.data[29].x, temp_200);
    // 0x000838: 0x59A0068001E71C0D Ffma
    temp_202 = fma(temp_188, temp_169, temp_201);
    // 0x000848: 0x5C90000000D70015 Rro
    // 0x000850: 0x508000000007150A Mufu
    temp_203 = cos(temp_202);
    // 0x000858: 0x508000000017150D Mufu
    temp_204 = sin(temp_202);
    // 0x000868: 0x5C68100000A70602 Fmul
    temp_205 = temp_93 * temp_203;
    // 0x000870: 0x5C69100000D70613 Fmul
    temp_206 = 0.0 - temp_204;
    temp_207 = temp_93 * temp_206;
    // 0x000878: 0x59A3010000D70C10 Ffma
    temp_208 = 0.0 - temp_204;
    temp_209 = 0.0 - temp_205;
    temp_210 = fma(temp_95, temp_208, temp_209);
    // 0x000888: 0x59A3098000A70C13 Ffma
    temp_211 = 0.0 - temp_203;
    temp_212 = 0.0 - temp_207;
    temp_213 = fma(temp_95, temp_211, temp_212);
    // 0x000890: 0x5C58100001070610 Fadd
    temp_214 = temp_93 + temp_210;
    // 0x000898: 0x5C58100001370C13 Fadd
    temp_215 = temp_95 + temp_213;
    // 0x0008A8: 0x5C68100001A7000C Fmul
    temp_216 = temp_195 * temp_125;
    // 0x0008B0: 0xEF95007048070F00 Ldc
    temp_217 = temp_168 + 0x480;
    temp_218 = uint(temp_217) >> 2;
    temp_219 = temp_218 >> 2;
    temp_220 = int(temp_218) & 3;
    temp_221 = vp_c7.data[int(temp_219)][temp_220];
    temp_222 = int(temp_218) + 1;
    temp_223 = uint(temp_222) >> 2;
    temp_224 = temp_222 & 3;
    temp_225 = vp_c7.data[int(temp_223)][temp_224];
    // 0x0008B8: 0x5C68100001A7031A Fmul
    temp_226 = temp_196 * temp_125;
    // 0x0008C8: 0xEF95007068070F02 Ldc
    temp_227 = temp_168 + 0x680;
    temp_228 = uint(temp_227) >> 2;
    temp_229 = temp_228 >> 2;
    temp_230 = int(temp_228) & 3;
    temp_231 = vp_c7.data[int(temp_229)][temp_230];
    temp_232 = int(temp_228) + 1;
    temp_233 = uint(temp_232) >> 2;
    temp_234 = temp_232 & 3;
    temp_235 = vp_c7.data[int(temp_233)][temp_234];
    // 0x0008D0: 0x59A008000057FF10 Ffma
    temp_236 = fma(0.0, temp_87, temp_214);
    // 0x0008D8: 0x59A009800057FF06 Ffma
    temp_237 = fma(0.0, temp_87, temp_215);
    // 0x0008E8: 0x1E23CF5C28F70405 Fmul32i
    temp_238 = temp_182 * 0.0299999993;
    // 0x0008F0: 0x49A0039407771A07 Ffma
    temp_239 = fma(temp_226, vp_c5.data[29].w, temp_192);
    // 0x0008F8: 0x4C98079400270004 Mov
    // 0x000908: 0x59A0080000A70B10 Ffma
    temp_240 = fma(temp_65, temp_203, temp_236);
    // 0x000910: 0x59A1030000D70B0B Ffma
    temp_241 = 0.0 - temp_204;
    temp_242 = fma(temp_65, temp_241, temp_237);
    // 0x000918: 0x49A0029407770C05 Ffma
    temp_243 = fma(temp_216, vp_c5.data[29].w, temp_238);
    // 0x000928: 0x4C9807940037000C Mov
    // 0x000930: 0x4C5810180BA70906 Fadd
    temp_244 = temp_193 + vp_c6.data[46].z;
    // 0x000938: 0x59A0080000D71110 Ffma
    temp_245 = fma(temp_75, temp_204, temp_240);
    // 0x000948: 0x59A0058000A7110B Ffma
    temp_246 = fma(temp_75, temp_203, temp_242);
    // 0x000950: 0x51A0021400470E0A Ffma
    temp_247 = fma(temp_138, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000958: 0x51A0061400570E0E Ffma
    temp_248 = fma(temp_138, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000968: 0x4C58300C0377090D Fadd
    temp_249 = 0.0 - vp_c3.data[13].w;
    temp_250 = temp_193 + temp_249;
    // 0x000970: 0x5C58100000771010 Fadd
    temp_251 = temp_245 + temp_239;
    // 0x000978: 0xEFF07F800B87FF0D Ast
    out_attr3.z = temp_250;
    // 0x000988: 0x5C58100000570B05 Fadd
    temp_252 = temp_246 + temp_243;
    // 0x000990: 0x49A005140007080F Ffma
    temp_253 = fma(temp_136, vp_c5.data[0].x, temp_247);
    // 0x000998: 0x4C6810180CA70607 Fmul
    temp_254 = temp_244 * vp_c6.data[50].z;
    // 0x0009A8: 0xEFF07F800E07FF0F Ast
    out_attr6.x = temp_253;
    // 0x0009B0: 0x59A0018000171001 Ffma
    temp_255 = fma(temp_251, temp_225, temp_235);
    // 0x0009B8: 0x59A0010000070504 Ffma
    temp_256 = fma(temp_252, temp_221, temp_231);
    // 0x0009C8: 0xEFF07F800D47FF01 Ast
    out_attr5.y = temp_255;
    // 0x0009D0: 0x4C6810180C270605 Fmul
    temp_257 = temp_244 * vp_c6.data[48].z;
    // 0x0009D8: 0xEFF07F800D07FF04 Ast
    out_attr5.x = temp_256;
    // 0x0009E8: 0x4C6810180C670603 Fmul
    temp_258 = temp_244 * vp_c6.data[49].z;
    // 0x0009F0: 0x4C5810180B970106 Fadd
    temp_259 = temp_255 + vp_c6.data[46].y;
    // 0x0009F8: 0x4C5830180B07040A Fadd
    temp_260 = 0.0 - vp_c6.data[44].x;
    temp_261 = temp_256 + temp_260;
    // 0x000A08: 0x4C68100C00070402 Fmul
    temp_262 = temp_256 * vp_c3.data[0].x;
    // 0x000A10: 0x4C68100C00870400 Fmul
    temp_263 = temp_256 * vp_c3.data[2].x;
    // 0x000A18: 0x49A0071400170811 Ffma
    temp_264 = fma(temp_136, vp_c5.data[0].y, temp_248);
    // 0x000A28: 0x4C68100C00470408 Fmul
    temp_265 = temp_256 * vp_c3.data[1].x;
    // 0x000A30: 0xEFF07F800E47FF11 Ast
    out_attr6.y = temp_264;
    // 0x000A38: 0x4C5830180B17010C Fadd
    temp_266 = 0.0 - vp_c6.data[44].y;
    temp_267 = temp_255 + temp_266;
    // 0x000A48: 0x4C68101803870A0A Fmul
    temp_268 = temp_261 * vp_c6.data[14].x;
    // 0x000A50: 0x49A003980C97060B Ffma
    temp_269 = fma(temp_259, vp_c6.data[50].y, temp_254);
    // 0x000A58: 0x49A0010C00170107 Ffma
    temp_270 = fma(temp_255, vp_c3.data[0].y, temp_262);
    // 0x000A68: 0x49A002980C170605 Ffma
    temp_271 = fma(temp_259, vp_c6.data[48].y, temp_257);
    // 0x000A70: 0x49A001980C570603 Ffma
    temp_272 = fma(temp_259, vp_c6.data[49].y, temp_258);
    // 0x000A78: 0x49A0000C00970100 Ffma
    temp_273 = fma(temp_255, vp_c3.data[2].y, temp_263);
    // 0x000A88: 0x4C58101002070906 Fadd
    temp_274 = temp_193 + vp_c4.data[8].x;
    // 0x000A90: 0x49A0051803970C0E Ffma
    temp_275 = fma(temp_267, vp_c6.data[14].y, temp_268);
    // 0x000A98: 0x49A0040C00570108 Ffma
    temp_276 = fma(temp_255, vp_c3.data[1].y, temp_265);
    // 0x000AA8: 0x49A0038C0027090C Ffma
    temp_277 = fma(temp_193, vp_c3.data[0].z, temp_270);
    // 0x000AB0: 0x4C5810180B87040A Fadd
    temp_278 = temp_256 + vp_c6.data[46].x;
    // 0x000AB8: 0x49A0000C00A70902 Ffma
    temp_279 = fma(temp_193, vp_c3.data[2].z, temp_273);
    // 0x000AC8: 0x49A0000C00A70600 Ffma
    temp_280 = fma(temp_274, vp_c3.data[2].z, temp_273);
    // 0x000AD0: 0x49A0038C00270607 Ffma
    temp_281 = fma(temp_274, vp_c3.data[0].z, temp_270);
    // 0x000AD8: 0x49A0040C00670606 Ffma
    temp_282 = fma(temp_274, vp_c3.data[1].z, temp_276);
    // 0x000AE8: 0x49A0040C00670908 Ffma
    temp_283 = fma(temp_193, vp_c3.data[1].z, temp_276);
    // 0x000AF0: 0x4C58100C00370C0C Fadd
    temp_284 = temp_277 + vp_c3.data[0].w;
    // 0x000AF8: 0x49A002980C070A05 Ffma
    temp_285 = fma(temp_278, vp_c6.data[48].x, temp_271);
    // 0x000B08: 0x4C5830180B27090D Fadd
    temp_286 = 0.0 - vp_c6.data[44].z;
    temp_287 = temp_193 + temp_286;
    // 0x000B10: 0x49A001980C470A03 Ffma
    temp_288 = fma(temp_278, vp_c6.data[49].x, temp_272);
    // 0x000B18: 0x4C58300C02F7040F Fadd
    temp_289 = 0.0 - vp_c3.data[11].w;
    temp_290 = temp_256 + temp_289;
    // 0x000B28: 0x4C58100C00770808 Fadd
    temp_291 = temp_283 + vp_c3.data[1].w;
    // 0x000B30: 0xEFF07F800B07FF0F Ast
    out_attr3.x = temp_290;
    // 0x000B38: 0x4C68101802C70C09 Fmul
    temp_292 = temp_284 * vp_c6.data[11].x;
    // 0x000B48: 0x4C58100C00370707 Fadd
    temp_293 = temp_281 + vp_c3.data[0].w;
    // 0x000B50: 0x4C6810180BB70504 Fmul
    temp_294 = temp_285 * vp_c6.data[46].w;
    // 0x000B58: 0x4C58300C03370110 Fadd
    temp_295 = 0.0 - vp_c3.data[12].w;
    temp_296 = temp_255 + temp_295;
    // 0x000B68: 0xEFF07F801107FF04 Ast
    out_attr9.x = temp_294;
    // 0x000B70: 0x49A0049802D70808 Ffma
    temp_297 = fma(temp_291, vp_c6.data[11].y, temp_292);
    // 0x000B78: 0xEFF07F800B47FF10 Ast
    out_attr3.y = temp_296;
    // 0x000B88: 0x4C6810180BB70309 Fmul
    temp_298 = temp_288 * vp_c6.data[46].w;
    // 0x000B90: 0x4C58100C00B70205 Fadd
    temp_299 = temp_279 + vp_c3.data[2].w;
    // 0x000B98: 0xEFF07F801147FF09 Ast
    out_attr9.y = temp_298;
    // 0x000BA8: 0x49A0071803A70D0D Ffma
    temp_300 = fma(temp_287, vp_c6.data[14].z, temp_275);
    // 0x000BB0: 0xEFF07F800C87FF05 Ast
    out_attr4.z = temp_299;
    // 0x000BB8: 0x4C68100C02470701 Fmul
    temp_301 = temp_293 * vp_c3.data[9].x;
    // 0x000BC8: 0x4C98079803C70002 Mov
    // 0x000BD0: 0x4C68100C01C70703 Fmul
    temp_302 = temp_293 * vp_c3.data[7].x;
    // 0x000BD8: 0x4C68100C02870704 Fmul
    temp_303 = temp_293 * vp_c3.data[10].x;
    // 0x000BE8: 0x4C58100C00770606 Fadd
    temp_304 = temp_282 + vp_c3.data[1].w;
    // 0x000BF0: 0x4C68100C02070707 Fmul
    temp_305 = temp_293 * vp_c3.data[8].x;
    // 0x000BF8: 0x4C58100C00B70000 Fadd
    temp_306 = temp_280 + vp_c3.data[2].w;
    // 0x000C08: 0x51A0011803B70D0D Ffma
    temp_307 = fma(temp_300, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000C10: 0x49A005980C870A0B Ffma
    temp_308 = fma(temp_278, vp_c6.data[50].x, temp_269);
    // 0x000C18: 0xEFF07F801047FF0D Ast
    out_attr8.y = temp_307;
    // 0x000C28: 0x49A0008C02570601 Ffma
    temp_309 = fma(temp_304, vp_c3.data[9].y, temp_301);
    // 0x000C30: 0x49A0018C01D70603 Ffma
    temp_310 = fma(temp_304, vp_c3.data[7].y, temp_302);
    // 0x000C38: 0x49A0020C02970602 Ffma
    temp_311 = fma(temp_304, vp_c3.data[10].y, temp_303);
    // 0x000C48: 0x49A0038C02170607 Ffma
    temp_312 = fma(temp_304, vp_c3.data[8].y, temp_305);
    // 0x000C50: 0x4C9807980307000A Mov
    // 0x000C58: 0x49A0041802E70508 Ffma
    temp_313 = fma(temp_299, vp_c6.data[11].z, temp_297);
    // 0x000C68: 0x49A0008C02670001 Ffma
    temp_314 = fma(temp_306, vp_c3.data[9].z, temp_309);
    // 0x000C70: 0x49A0018C01E70003 Ffma
    temp_315 = fma(temp_306, vp_c3.data[7].z, temp_310);
    // 0x000C78: 0x49A0010C02A70002 Ffma
    temp_316 = fma(temp_306, vp_c3.data[10].z, temp_311);
    // 0x000C88: 0x49A0038C02270007 Ffma
    temp_317 = fma(temp_306, vp_c3.data[8].z, temp_312);
    // 0x000C90: 0x4C6810180BB70B0B Fmul
    temp_318 = temp_308 * vp_c6.data[46].w;
    // 0x000C98: 0x51A0051802F70808 Ffma
    temp_319 = fma(temp_313, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000CA8: 0xEFF07F801187FF0B Ast
    out_attr9.z = temp_318;
    // 0x000CB0: 0x4C58100C02770101 Fadd
    temp_320 = temp_314 + vp_c3.data[9].w;
    // 0x000CB8: 0xEFF07F801007FF08 Ast
    out_attr8.x = temp_319;
    // 0x000CC8: 0x4C58100C01F70303 Fadd
    temp_321 = temp_315 + vp_c3.data[7].w;
    // 0x000CD0: 0xEFF07F800787FF01 Ast
    gl_Position.z = temp_320;
    // 0x000CD8: 0x4C58100C02B70202 Fadd
    temp_322 = temp_316 + vp_c3.data[10].w;
    // 0x000CE8: 0xEFF07F800707FF03 Ast
    gl_Position.x = temp_321;
    // 0x000CF0: 0x4C58100C02370707 Fadd
    temp_323 = temp_317 + vp_c3.data[8].w;
    // 0x000CF8: 0xEFF07F8007C7FF02 Ast
    gl_Position.w = temp_322;
    // 0x000D08: 0xEFF07F800747FF07 Ast
    gl_Position.y = temp_323;
    // 0x000D10: 0xE30000000007000F Exit
    return;
}
