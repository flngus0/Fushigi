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
layout (location = 12) in vec4 in_attr12;

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
    int temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    int temp_193;
    int temp_194;
    uint temp_195;
    uint temp_196;
    int temp_197;
    precise float temp_198;
    int temp_199;
    uint temp_200;
    uint temp_201;
    int temp_202;
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
    int temp_219;
    uint temp_220;
    uint temp_221;
    int temp_222;
    precise float temp_223;
    int temp_224;
    uint temp_225;
    int temp_226;
    precise float temp_227;
    precise float temp_228;
    int temp_229;
    uint temp_230;
    uint temp_231;
    int temp_232;
    precise float temp_233;
    int temp_234;
    uint temp_235;
    int temp_236;
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
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079000370001 Mov
    // 0x000010: 0x4C98079000770003 Mov
    // 0x000018: 0x4C98079000B70007 Mov
    // 0x000028: 0x0103F0000007F00D Mov32i
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
    // 0x0000E8: 0x32A006BF00070303 Ffma
    temp_16 = fma(temp_13, 0.5, 0.5);
    // 0x0000F0: 0x32A006BF00070000 Ffma
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
    // 0x000128: 0xEFD87F800807FF0F Ald
    temp_25 = in_attr0.x;
    // 0x000130: 0x4C9807980CC70004 Mov
    // 0x000138: 0xEFD87F801407FF0E Ald
    temp_26 = in_attr12.x;
    // 0x000148: 0x4C9807980CD70006 Mov
    // 0x000150: 0xEFD87F801447FF09 Ald
    temp_27 = in_attr12.y;
    // 0x000158: 0x4C9807980CE70016 Mov
    // 0x000168: 0xEFD87F800847FF07 Ald
    temp_28 = in_attr0.y;
    // 0x000170: 0x4C6810180CC70404 Fmul
    temp_29 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000178: 0xEFD87F800A07FF10 Ald
    temp_30 = in_attr2.x;
    // 0x000188: 0x49A002180CD70614 Ffma
    temp_31 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_29);
    // 0x000190: 0xEFD87F800907FF05 Ald
    temp_32 = in_attr1.x;
    // 0x000198: 0x4C68101000470F06 Fmul
    temp_33 = temp_25 * vp_c4.data[1].x;
    // 0x0001A8: 0xEFD87F800887FF15 Ald
    temp_34 = in_attr0.z;
    // 0x0001B0: 0x4C68101000870F0C Fmul
    temp_35 = temp_25 * vp_c4.data[2].x;
    // 0x0001B8: 0xEFD87F800A47FF0A Ald
    temp_36 = in_attr2.y;
    // 0x0001C8: 0x4C68101000070F0B Fmul
    temp_37 = temp_25 * vp_c4.data[0].x;
    // 0x0001D0: 0xEFD87F800947FF04 Ald
    temp_38 = in_attr1.y;
    // 0x0001D8: 0x5C58300000E70F0F Fadd
    temp_39 = 0.0 - temp_26;
    temp_40 = temp_25 + temp_39;
    // 0x0001E8: 0xEFD87F800A87FF18 Ald
    temp_41 = in_attr2.z;
    // 0x0001F0: 0x4C68101000470E08 Fmul
    temp_42 = temp_26 * vp_c4.data[1].x;
    // 0x0001F8: 0x4C68101000870E12 Fmul
    temp_43 = temp_26 * vp_c4.data[2].x;
    // 0x000208: 0x4C68101000070E13 Fmul
    temp_44 = temp_26 * vp_c4.data[0].x;
    // 0x000210: 0xEFD87F801487FF0E Ald
    temp_45 = in_attr12.z;
    // 0x000218: 0x49A0031000570706 Ffma
    temp_46 = fma(temp_28, vp_c4.data[1].y, temp_33);
    // 0x000228: 0x49A006100097070C Ffma
    temp_47 = fma(temp_28, vp_c4.data[2].y, temp_35);
    // 0x000230: 0x49A005900017070B Ffma
    temp_48 = fma(temp_28, vp_c4.data[0].y, temp_37);
    // 0x000238: 0x49A0091000970911 Ffma
    temp_49 = fma(temp_27, vp_c4.data[2].y, temp_43);
    // 0x000248: 0x49A00A180CE71612 Ffma
    temp_50 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_31);
    // 0x000250: 0x5C58300000970707 Fadd
    temp_51 = 0.0 - temp_27;
    temp_52 = temp_28 + temp_51;
    // 0x000258: 0x5080000000571212 Mufu
    temp_53 = inversesqrt(temp_50);
    // 0x000268: 0x49A0041000570908 Ffma
    temp_54 = fma(temp_27, vp_c4.data[1].y, temp_42);
    // 0x000270: 0x49A0099000170909 Ffma
    temp_55 = fma(temp_27, vp_c4.data[0].y, temp_44);
    // 0x000278: 0x4C68101000871013 Fmul
    temp_56 = temp_30 * vp_c4.data[2].x;
    // 0x000288: 0x4C6810100007101B Fmul
    temp_57 = temp_30 * vp_c4.data[0].x;
    // 0x000290: 0x4C68101000471014 Fmul
    temp_58 = temp_30 * vp_c4.data[1].x;
    // 0x000298: 0x5C68100000F70F10 Fmul
    temp_59 = temp_40 * temp_40;
    // 0x0002A8: 0x4C68101000870517 Fmul
    temp_60 = temp_32 * vp_c4.data[2].x;
    // 0x0002B0: 0x4C68101000470516 Fmul
    temp_61 = temp_32 * vp_c4.data[1].x;
    // 0x0002B8: 0x4C68101000070519 Fmul
    temp_62 = temp_32 * vp_c4.data[0].x;
    // 0x0002C8: 0xEFD87F800987FF05 Ald
    temp_63 = in_attr1.z;
    // 0x0002D0: 0x49A0099000970A0F Ffma
    temp_64 = fma(temp_36, vp_c4.data[2].y, temp_56);
    // 0x0002D8: 0x49A00D9000170A1B Ffma
    temp_65 = fma(temp_36, vp_c4.data[0].y, temp_57);
    // 0x0002E8: 0x59A0080000770707 Ffma
    temp_66 = fma(temp_52, temp_52, temp_59);
    // 0x0002F0: 0x49A0031000671510 Ffma
    temp_67 = fma(temp_34, vp_c4.data[1].z, temp_46);
    // 0x0002F8: 0x49A0061000A71506 Ffma
    temp_68 = fma(temp_34, vp_c4.data[2].z, temp_47);
    // 0x000308: 0x49A005900027150C Ffma
    temp_69 = fma(temp_34, vp_c4.data[0].z, temp_48);
    // 0x000310: 0x4C6810180CC7120B Fmul
    temp_70 = temp_53 * vp_c6.data[51].x;
    // 0x000318: 0x5C58300000E71515 Fadd
    temp_71 = 0.0 - temp_45;
    temp_72 = temp_34 + temp_71;
    // 0x000328: 0x49A0041000670E08 Ffma
    temp_73 = fma(temp_45, vp_c4.data[1].z, temp_54);
    // 0x000330: 0x49A0089000A70E11 Ffma
    temp_74 = fma(temp_45, vp_c4.data[2].z, temp_49);
    // 0x000338: 0x49A00A1000570A0A Ffma
    temp_75 = fma(temp_36, vp_c4.data[1].y, temp_58);
    // 0x000348: 0x49A0049000270E0E Ffma
    temp_76 = fma(temp_45, vp_c4.data[0].z, temp_55);
    // 0x000350: 0x49A00B1000570414 Ffma
    temp_77 = fma(temp_38, vp_c4.data[1].y, temp_61);
    // 0x000358: 0x4C58101000771009 Fadd
    temp_78 = temp_67 + vp_c4.data[1].w;
    // 0x000368: 0x49A105980CF70B16 Ffma
    temp_79 = 0.0 - vp_c6.data[51].w;
    temp_80 = fma(temp_70, temp_79, temp_70);
    // 0x000370: 0x4C6810180CE71210 Fmul
    temp_81 = temp_53 * vp_c6.data[51].z;
    // 0x000378: 0x49A00B9000970413 Ffma
    temp_82 = fma(temp_38, vp_c4.data[2].y, temp_60);
    // 0x000388: 0x49A0079000A7180F Ffma
    temp_83 = fma(temp_41, vp_c4.data[2].z, temp_64);
    // 0x000390: 0x49A00D900027181B Ffma
    temp_84 = fma(temp_41, vp_c4.data[0].z, temp_65);
    // 0x000398: 0x49A00C9000170404 Ffma
    temp_85 = fma(temp_38, vp_c4.data[0].y, temp_62);
    // 0x0003A8: 0x49A0051000671818 Ffma
    temp_86 = fma(temp_41, vp_c4.data[1].z, temp_75);
    // 0x0003B0: 0x4C58101000370C0C Fadd
    temp_87 = temp_69 + vp_c4.data[0].w;
    // 0x0003B8: 0x4C68101409670917 Fmul
    temp_88 = temp_78 * vp_c5.data[37].z;
    // 0x0003C8: 0x1E23DCCCCCD71616 Fmul32i
    temp_89 = temp_80 * 0.100000001;
    // 0x0003D0: 0x49A108180CF7100A Ffma
    temp_90 = 0.0 - vp_c6.data[51].w;
    temp_91 = fma(temp_81, temp_90, temp_81);
    // 0x0003D8: 0x49A0099000A70513 Ffma
    temp_92 = fma(temp_63, vp_c4.data[2].z, temp_82);
    // 0x0003E8: 0x49A00A1000670514 Ffma
    temp_93 = fma(temp_63, vp_c4.data[1].z, temp_77);
    // 0x0003F0: 0x49A0021000270505 Ffma
    temp_94 = fma(temp_63, vp_c4.data[0].z, temp_85);
    // 0x0003F8: 0x4C58101000B70606 Fadd
    temp_95 = temp_68 + vp_c4.data[2].w;
    // 0x000408: 0x59A10B8001670C17 Ffma
    temp_96 = 0.0 - temp_89;
    temp_97 = fma(temp_87, temp_96, temp_88);
    // 0x000410: 0x1E23DCCCCCD70A04 Fmul32i
    temp_98 = temp_91 * 0.100000001;
    // 0x000418: 0x5C68100001B71B19 Fmul
    temp_99 = temp_84 * temp_84;
    // 0x000428: 0x4C58101000B71111 Fadd
    temp_100 = temp_74 + vp_c4.data[2].w;
    // 0x000430: 0x4C58101000370E0A Fadd
    temp_101 = temp_76 + vp_c4.data[0].w;
    // 0x000438: 0x5C6810000057050E Fmul
    temp_102 = temp_94 * temp_94;
    // 0x000448: 0x4C58101000770808 Fadd
    temp_103 = temp_73 + vp_c4.data[1].w;
    // 0x000450: 0x59A00B8000470616 Ffma
    temp_104 = fma(temp_95, temp_98, temp_97);
    // 0x000458: 0x59A00C8001871804 Ffma
    temp_105 = fma(temp_86, temp_86, temp_99);
    // 0x000468: 0x5C5830000117061C Fadd
    temp_106 = 0.0 - temp_100;
    temp_107 = temp_95 + temp_106;
    // 0x000470: 0x5C58300000A70C1D Fadd
    temp_108 = 0.0 - temp_101;
    temp_109 = temp_87 + temp_108;
    // 0x000478: 0x59A0038001571507 Ffma
    temp_110 = fma(temp_72, temp_72, temp_66);
    // 0x000488: 0x59A007000147140E Ffma
    temp_111 = fma(temp_93, temp_93, temp_102);
    // 0x000490: 0x5080000000870707 Mufu
    temp_112 = sqrt(temp_110);
    // 0x000498: 0x49A00B1C23070D0D Ffma
    temp_113 = fma(0.5, vp_c7.data[140].x, temp_104);
    // 0x0004A8: 0x59A0020000F70F1A Ffma
    temp_114 = fma(temp_83, temp_83, temp_105);
    // 0x0004B0: 0xEFD87F8014C7FF04 Ald
    temp_115 = in_attr12.w;
    // 0x0004B8: 0x5C58300000870917 Fadd
    temp_116 = 0.0 - temp_103;
    temp_117 = temp_78 + temp_116;
    // 0x0004C8: 0x5080000000571A1A Mufu
    temp_118 = inversesqrt(temp_114);
    // 0x0004D0: 0x59A10E8001C7FF19 Ffma
    temp_119 = 0.0 - temp_107;
    temp_120 = fma(0.0, temp_119, temp_109);
    // 0x0004D8: 0x5C69100001D7FF1D Fmul
    temp_121 = 0.0 - temp_109;
    temp_122 = 0.0 * temp_121;
    // 0x0004E8: 0x3868104040070D1E Fmul
    temp_123 = temp_113 * 3.0;
    // 0x0004F0: 0x5C90000000D70016 Rro
    // 0x0004F8: 0x59A007000137130E Ffma
    temp_124 = fma(temp_92, temp_92, temp_111);
    // 0x000508: 0x5080000000071616 Mufu
    temp_125 = cos(temp_113);
    // 0x000510: 0x59A20B8001C7FF1C Ffma
    temp_126 = 0.0 - temp_117;
    temp_127 = fma(0.0, temp_107, temp_126);
    // 0x000518: 0x5080000000570E0E Mufu
    temp_128 = inversesqrt(temp_124);
    // 0x000528: 0x5C90000001E7001E Rro
    // 0x000530: 0x59A00E800177FF17 Ffma
    temp_129 = fma(0.0, temp_117, temp_122);
    // 0x000538: 0x5080000000071E15 Mufu
    temp_130 = cos(temp_123);
    // 0x000548: 0x4C6810180CD71212 Fmul
    temp_131 = temp_53 * vp_c6.data[51].y;
    // 0x000550: 0x5C68100001A71B1D Fmul
    temp_132 = temp_84 * temp_118;
    // 0x000558: 0x5C68100000B71C1C Fmul
    temp_133 = temp_127 * temp_70;
    // 0x000568: 0x5C68100001A71818 Fmul
    temp_134 = temp_86 * temp_118;
    // 0x000570: 0x5C59100001171111 Fadd
    temp_135 = 0.0 - temp_100;
    temp_136 = temp_135 + temp_100;
    // 0x000578: 0x5C68100000770B0B Fmul
    temp_137 = temp_70 * temp_112;
    // 0x000588: 0x5C68100001671616 Fmul
    temp_138 = temp_125 * temp_125;
    // 0x000590: 0x59A00E0001271919 Ffma
    temp_139 = fma(temp_120, temp_131, temp_133);
    // 0x000598: 0x5C68100000E71313 Fmul
    temp_140 = temp_92 * temp_128;
    // 0x0005A8: 0x5C68100000E70505 Fmul
    temp_141 = temp_94 * temp_128;
    // 0x0005B0: 0x5C68100000E71414 Fmul
    temp_142 = temp_93 * temp_128;
    // 0x0005B8: 0x5C68100001A70F0E Fmul
    temp_143 = temp_83 * temp_118;
    // 0x0005C8: 0xEFD87F800AC7FF0F Ald
    temp_144 = in_attr2.w;
    // 0x0005D0: 0x5C6810000157161B Fmul
    temp_145 = temp_138 * temp_130;
    // 0x0005D8: 0xEFD87F801007FF16 Ald
    temp_146 = in_attr8.x;
    // 0x0005E8: 0x38681040A0070D15 Fmul
    temp_147 = temp_113 * 5.0;
    // 0x0005F0: 0x4C68101409770D0D Fmul
    temp_148 = temp_113 * vp_c5.data[37].w;
    // 0x0005F8: 0x5C6810000137181F Fmul
    temp_149 = temp_134 * temp_140;
    // 0x000608: 0x5C68100000570E1A Fmul
    temp_150 = temp_143 * temp_141;
    // 0x000610: 0x4C6810140957041C Fmul
    temp_151 = temp_115 * vp_c5.data[37].y;
    // 0x000618: 0x59A00C8001071719 Ffma
    temp_152 = fma(temp_129, temp_81, temp_139);
    // 0x000628: 0xEFD87F801047FF17 Ald
    temp_153 = in_attr8.y;
    // 0x000630: 0x5C90000001570015 Rro
    // 0x000638: 0xEFF07F800847FF14 Ast
    out_attr0.y = temp_142;
    // 0x000648: 0x5C90000000D7000D Rro
    // 0x000650: 0x5080000000071515 Mufu
    temp_154 = cos(temp_147);
    // 0x000658: 0x59A20F8001470E1E Ffma
    temp_155 = 0.0 - temp_149;
    temp_156 = fma(temp_143, temp_142, temp_155);
    // 0x000668: 0x5080000000170D0D Mufu
    temp_157 = sin(temp_148);
    // 0x000670: 0x5C68100001471D1F Fmul
    temp_158 = temp_132 * temp_142;
    // 0x000678: 0xEFF07F800987FF0E Ast
    out_attr1.z = temp_143;
    // 0x000688: 0x59A20D0001371D1A Ffma
    temp_159 = 0.0 - temp_150;
    temp_160 = fma(temp_132, temp_140, temp_159);
    // 0x000690: 0xEFF07F800887FF13 Ast
    out_attr0.z = temp_140;
    // 0x000698: 0x4C6810180CF71C1C Fmul
    temp_161 = temp_151 * vp_c6.data[51].w;
    // 0x0006A8: 0xEFF07F800807FF05 Ast
    out_attr0.x = temp_141;
    // 0x0006B0: 0x5C68100000F71E1E Fmul
    temp_162 = temp_156 * temp_144;
    // 0x0006B8: 0xEFF07F800907FF1D Ast
    out_attr1.x = temp_132;
    // 0x0006C8: 0x5C68120001571B1B Fmul
    temp_163 = temp_145 * 0.5;
    temp_164 = temp_163 * temp_154;
    // 0x0006D0: 0xEFF07F800947FF18 Ast
    out_attr1.y = temp_134;
    // 0x0006D8: 0x1E23DCCCCCD70D14 Fmul32i
    temp_165 = temp_157 * 0.100000001;
    // 0x0006E8: 0xEFF07F800A07FF1E Ast
    out_attr2.x = temp_162;
    // 0x0006F0: 0x5C58100001170613 Fadd
    temp_166 = temp_95 + temp_136;
    // 0x0006F8: 0x5C68100000771011 Fmul
    temp_167 = temp_81 * temp_112;
    // 0x000708: 0x59A20F8000571810 Ffma
    temp_168 = 0.0 - temp_158;
    temp_169 = fma(temp_134, temp_141, temp_168);
    // 0x000710: 0x5C68100000F71A1A Fmul
    temp_170 = temp_160 * temp_144;
    // 0x000718: 0x5C6810000077121F Fmul
    temp_171 = temp_131 * temp_112;
    // 0x000728: 0xEFF07F800A47FF1A Ast
    out_attr2.y = temp_170;
    // 0x000730: 0x59A00A0001B71919 Ffma
    temp_172 = fma(temp_152, temp_164, temp_165);
    // 0x000738: 0x59A009800097FF13 Ffma
    temp_173 = fma(0.0, temp_78, temp_166);
    // 0x000748: 0x5C68100001171C15 Fmul
    temp_174 = temp_161 * temp_167;
    // 0x000750: 0x5C68100000F71010 Fmul
    temp_175 = temp_169 * temp_144;
    // 0x000758: 0x5C68100000B71C12 Fmul
    temp_176 = temp_161 * temp_137;
    // 0x000768: 0xEFF07F800A87FF10 Ast
    out_attr2.z = temp_175;
    // 0x000770: 0x59A1098000C7FF0D Ffma
    temp_177 = 0.0 - temp_87;
    temp_178 = fma(0.0, temp_177, temp_173);
    // 0x000778: 0x5C68100001571B13 Fmul
    temp_179 = temp_164 * temp_174;
    // 0x000788: 0x5C68100001F71C11 Fmul
    temp_180 = temp_161 * temp_171;
    // 0x000790: 0x5C68100001271B05 Fmul
    temp_181 = temp_164 * temp_176;
    // 0x000798: 0x49A006840007130D Ffma
    temp_182 = fma(temp_179, vp_c1.data[0].x, temp_178);
    // 0x0007A8: 0x5C68100001171B0B Fmul
    temp_183 = temp_164 * temp_180;
    // 0x0007B0: 0x5C58100000270002 Fadd
    temp_184 = temp_21 + temp_23;
    // 0x0007B8: 0x4CB0119002371A00 F2i
    temp_185 = trunc(vp_c4.data[8].w);
    temp_186 = int(temp_185);
    // 0x0007C8: 0x5C58100000370101 Fadd
    temp_187 = temp_22 + temp_24;
    // 0x0007D0: 0x4C6810140747020E Fmul
    temp_188 = temp_184 * vp_c5.data[29].x;
    // 0x0007D8: 0x5C68100000470202 Fmul
    temp_189 = temp_184 * temp_115;
    // 0x0007E8: 0x5C68100000470101 Fmul
    temp_190 = temp_187 * temp_115;
    // 0x0007F0: 0x5C68100000470E0E Fmul
    temp_191 = temp_188 * temp_115;
    // 0x0007F8: 0x59A0070001C71919 Ffma
    temp_192 = fma(temp_172, temp_161, temp_191);
    // 0x000808: 0x384800000047000E Shl
    temp_193 = temp_186 << 4;
    // 0x000810: 0xEF94007048870E12 Ldc
    temp_194 = temp_193 + 0x488;
    temp_195 = uint(temp_194) >> 2;
    temp_196 = temp_195 >> 2;
    temp_197 = int(temp_195) & 3;
    temp_198 = vp_c7.data[int(temp_196)][temp_197];
    // 0x000818: 0x5C90000001970019 Rro
    // 0x000828: 0xEF94007068870E14 Ldc
    temp_199 = temp_193 + 0x688;
    temp_200 = uint(temp_199) >> 2;
    temp_201 = temp_200 >> 2;
    temp_202 = int(temp_200) & 3;
    temp_203 = vp_c7.data[int(temp_201)][temp_202];
    // 0x000830: 0x508000000007190F Mufu
    temp_204 = cos(temp_192);
    // 0x000838: 0x5080000000171913 Mufu
    temp_205 = sin(temp_192);
    // 0x000848: 0x5C68100000F70810 Fmul
    temp_206 = temp_103 * temp_204;
    // 0x000850: 0x5C69100001370800 Fmul
    temp_207 = 0.0 - temp_205;
    temp_208 = temp_103 * temp_207;
    // 0x000858: 0x59A3080001370A03 Ffma
    temp_209 = 0.0 - temp_205;
    temp_210 = 0.0 - temp_206;
    temp_211 = fma(temp_101, temp_209, temp_210);
    // 0x000868: 0x59A3000000F70A00 Ffma
    temp_212 = 0.0 - temp_204;
    temp_213 = 0.0 - temp_208;
    temp_214 = fma(temp_101, temp_212, temp_213);
    // 0x000870: 0x59A00A0001270D0D Ffma
    temp_215 = fma(temp_182, temp_198, temp_203);
    // 0x000878: 0x5C58100000370808 Fadd
    temp_216 = temp_103 + temp_211;
    // 0x000888: 0xEFF07F800D87FF0D Ast
    out_attr5.z = temp_215;
    // 0x000890: 0x5C58100000070A04 Fadd
    temp_217 = temp_101 + temp_214;
    // 0x000898: 0x5C6810000077020A Fmul
    temp_218 = temp_189 * temp_112;
    // 0x0008A8: 0xEF95007068070E02 Ldc
    temp_219 = temp_193 + 0x680;
    temp_220 = uint(temp_219) >> 2;
    temp_221 = temp_220 >> 2;
    temp_222 = int(temp_220) & 3;
    temp_223 = vp_c7.data[int(temp_221)][temp_222];
    temp_224 = int(temp_220) + 1;
    temp_225 = uint(temp_224) >> 2;
    temp_226 = temp_224 & 3;
    temp_227 = vp_c7.data[int(temp_225)][temp_226];
    // 0x0008B0: 0x5C68100000770107 Fmul
    temp_228 = temp_190 * temp_112;
    // 0x0008B8: 0xEF95007048070E00 Ldc
    temp_229 = temp_193 + 0x480;
    temp_230 = uint(temp_229) >> 2;
    temp_231 = temp_230 >> 2;
    temp_232 = int(temp_230) & 3;
    temp_233 = vp_c7.data[int(temp_231)][temp_232];
    temp_234 = int(temp_230) + 1;
    temp_235 = uint(temp_234) >> 2;
    temp_236 = temp_234 & 3;
    temp_237 = vp_c7.data[int(temp_235)][temp_236];
    // 0x0008C8: 0x59A004000067FF08 Ffma
    temp_238 = fma(0.0, temp_95, temp_216);
    // 0x0008D0: 0x59A002000067FF04 Ffma
    temp_239 = fma(0.0, temp_95, temp_217);
    // 0x0008D8: 0x1E23CF5C28F70B06 Fmul32i
    temp_240 = temp_183 * 0.0299999993;
    // 0x0008E8: 0x1E23CF5C28F7050B Fmul32i
    temp_241 = temp_181 * 0.0299999993;
    // 0x0008F0: 0x59A0040000F70905 Ffma
    temp_242 = fma(temp_78, temp_204, temp_238);
    // 0x0008F8: 0x59A1020001370909 Ffma
    temp_243 = 0.0 - temp_205;
    temp_244 = fma(temp_78, temp_243, temp_239);
    // 0x000908: 0x4C98079400270004 Mov
    // 0x000910: 0x49A0059407770A0A Ffma
    temp_245 = fma(temp_218, vp_c5.data[29].w, temp_241);
    // 0x000918: 0x49A0031407770706 Ffma
    temp_246 = fma(temp_228, vp_c5.data[29].w, temp_240);
    // 0x000928: 0x4C98079400370008 Mov
    // 0x000930: 0x59A0028001370C05 Ffma
    temp_247 = fma(temp_87, temp_205, temp_242);
    // 0x000938: 0x59A0048000F70C09 Ffma
    temp_248 = fma(temp_87, temp_204, temp_244);
    // 0x000948: 0x51A0021400471704 Ffma
    temp_249 = fma(temp_153, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000950: 0x4C58300C03770D0C Fadd
    temp_250 = 0.0 - vp_c3.data[13].w;
    temp_251 = temp_215 + temp_250;
    // 0x000958: 0x51A0041400571717 Ffma
    temp_252 = fma(temp_153, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000968: 0xEFF07F800B87FF0C Ast
    out_attr3.z = temp_251;
    // 0x000970: 0x5C58100000A70909 Fadd
    temp_253 = temp_248 + temp_245;
    // 0x000978: 0x5C58100000670506 Fadd
    temp_254 = temp_247 + temp_246;
    // 0x000988: 0x49A002140007160E Ffma
    temp_255 = fma(temp_146, vp_c5.data[0].x, temp_249);
    // 0x000990: 0x4C5810180BA70D05 Fadd
    temp_256 = temp_215 + vp_c6.data[46].z;
    // 0x000998: 0xEFF07F800E07FF0E Ast
    out_attr6.x = temp_255;
    // 0x0009A8: 0x59A0010000070904 Ffma
    temp_257 = fma(temp_253, temp_233, temp_223);
    // 0x0009B0: 0x59A0018000170601 Ffma
    temp_258 = fma(temp_254, temp_237, temp_227);
    // 0x0009B8: 0xEFF07F800D07FF04 Ast
    out_attr5.x = temp_257;
    // 0x0009C8: 0x4C6810180C270503 Fmul
    temp_259 = temp_256 * vp_c6.data[48].z;
    // 0x0009D0: 0xEFF07F800D47FF01 Ast
    out_attr5.y = temp_258;
    // 0x0009D8: 0x4C5830180B07040A Fadd
    temp_260 = 0.0 - vp_c6.data[44].x;
    temp_261 = temp_257 + temp_260;
    // 0x0009E8: 0x4C5810180B970106 Fadd
    temp_262 = temp_258 + vp_c6.data[46].y;
    // 0x0009F0: 0x4C6810180C670507 Fmul
    temp_263 = temp_256 * vp_c6.data[49].z;
    // 0x0009F8: 0x4C6810180CA70509 Fmul
    temp_264 = temp_256 * vp_c6.data[50].z;
    // 0x000A08: 0x4C68100C00070402 Fmul
    temp_265 = temp_257 * vp_c3.data[0].x;
    // 0x000A10: 0x4C5830180B17010B Fadd
    temp_266 = 0.0 - vp_c6.data[44].y;
    temp_267 = temp_258 + temp_266;
    // 0x000A18: 0x4C68101803870A0A Fmul
    temp_268 = temp_261 * vp_c6.data[14].x;
    // 0x000A28: 0x4C68100C00870400 Fmul
    temp_269 = temp_257 * vp_c3.data[2].x;
    // 0x000A30: 0x49A001980C170605 Ffma
    temp_270 = fma(temp_262, vp_c6.data[48].y, temp_259);
    // 0x000A38: 0x4C68100C00470408 Fmul
    temp_271 = temp_257 * vp_c3.data[1].x;
    // 0x000A48: 0x49A003980C570603 Ffma
    temp_272 = fma(temp_262, vp_c6.data[49].y, temp_263);
    // 0x000A50: 0x49A004980C970609 Ffma
    temp_273 = fma(temp_262, vp_c6.data[50].y, temp_264);
    // 0x000A58: 0x49A0010C00170107 Ffma
    temp_274 = fma(temp_258, vp_c3.data[0].y, temp_265);
    // 0x000A68: 0x4C58101002070D06 Fadd
    temp_275 = temp_215 + vp_c4.data[8].x;
    // 0x000A70: 0x49A0051803970B0E Ffma
    temp_276 = fma(temp_267, vp_c6.data[14].y, temp_268);
    // 0x000A78: 0x4C5810180B87040A Fadd
    temp_277 = temp_257 + vp_c6.data[46].x;
    // 0x000A88: 0x49A0000C00970100 Ffma
    temp_278 = fma(temp_258, vp_c3.data[2].y, temp_269);
    // 0x000A90: 0x49A0040C00570108 Ffma
    temp_279 = fma(temp_258, vp_c3.data[1].y, temp_271);
    // 0x000A98: 0x49A0038C00270D0B Ffma
    temp_280 = fma(temp_215, vp_c3.data[0].z, temp_274);
    // 0x000AA8: 0x49A0038C00270607 Ffma
    temp_281 = fma(temp_275, vp_c3.data[0].z, temp_274);
    // 0x000AB0: 0x4C5830180B270D0C Fadd
    temp_282 = 0.0 - vp_c6.data[44].z;
    temp_283 = temp_215 + temp_282;
    // 0x000AB8: 0x49A002980C070A05 Ffma
    temp_284 = fma(temp_277, vp_c6.data[48].x, temp_270);
    // 0x000AC8: 0x49A0000C00A70D02 Ffma
    temp_285 = fma(temp_215, vp_c3.data[2].z, temp_278);
    // 0x000AD0: 0x49A0000C00A70600 Ffma
    temp_286 = fma(temp_275, vp_c3.data[2].z, temp_278);
    // 0x000AD8: 0x49A0040C00670606 Ffma
    temp_287 = fma(temp_275, vp_c3.data[1].z, temp_279);
    // 0x000AE8: 0x49A0040C00670D08 Ffma
    temp_288 = fma(temp_215, vp_c3.data[1].z, temp_279);
    // 0x000AF0: 0x49A001980C470A03 Ffma
    temp_289 = fma(temp_277, vp_c6.data[49].x, temp_272);
    // 0x000AF8: 0x4C58300C02F7040D Fadd
    temp_290 = 0.0 - vp_c3.data[11].w;
    temp_291 = temp_257 + temp_290;
    // 0x000B08: 0x4C58100C00370707 Fadd
    temp_292 = temp_281 + vp_c3.data[0].w;
    // 0x000B10: 0xEFF07F800B07FF0D Ast
    out_attr3.x = temp_291;
    // 0x000B18: 0x4C58100C00370B0B Fadd
    temp_293 = temp_280 + vp_c3.data[0].w;
    // 0x000B28: 0x4C6810180BB70504 Fmul
    temp_294 = temp_284 * vp_c6.data[46].w;
    // 0x000B30: 0x49A004980C870A09 Ffma
    temp_295 = fma(temp_277, vp_c6.data[50].x, temp_273);
    // 0x000B38: 0xEFF07F801107FF04 Ast
    out_attr9.x = temp_294;
    // 0x000B48: 0x4C58300C0337010F Fadd
    temp_296 = 0.0 - vp_c3.data[12].w;
    temp_297 = temp_258 + temp_296;
    // 0x000B50: 0x4C6810180BB7030A Fmul
    temp_298 = temp_289 * vp_c6.data[46].w;
    // 0x000B58: 0xEFF07F800B47FF0F Ast
    out_attr3.y = temp_297;
    // 0x000B68: 0x4C58100C00B70205 Fadd
    temp_299 = temp_285 + vp_c3.data[2].w;
    // 0x000B70: 0xEFF07F801147FF0A Ast
    out_attr9.y = temp_298;
    // 0x000B78: 0x49A0071803A70C0C Ffma
    temp_300 = fma(temp_283, vp_c6.data[14].z, temp_276);
    // 0x000B88: 0xEFF07F800C87FF05 Ast
    out_attr4.z = temp_299;
    // 0x000B90: 0x4C68100C02470701 Fmul
    temp_301 = temp_292 * vp_c3.data[9].x;
    // 0x000B98: 0x4C98079803C70002 Mov
    // 0x000BA8: 0x4C68100C01C70703 Fmul
    temp_302 = temp_292 * vp_c3.data[7].x;
    // 0x000BB0: 0x4C68100C02870704 Fmul
    temp_303 = temp_292 * vp_c3.data[10].x;
    // 0x000BB8: 0x4C58100C00770808 Fadd
    temp_304 = temp_288 + vp_c3.data[1].w;
    // 0x000BC8: 0x4C68101802C70B0B Fmul
    temp_305 = temp_293 * vp_c6.data[11].x;
    // 0x000BD0: 0x4C58100C00770606 Fadd
    temp_306 = temp_287 + vp_c3.data[1].w;
    // 0x000BD8: 0x4C68100C02070707 Fmul
    temp_307 = temp_292 * vp_c3.data[8].x;
    // 0x000BE8: 0x51A0011803B70C0C Ffma
    temp_308 = fma(temp_300, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000BF0: 0x4C58100C00B70000 Fadd
    temp_309 = temp_286 + vp_c3.data[2].w;
    // 0x000BF8: 0xEFF07F801047FF0C Ast
    out_attr8.y = temp_308;
    // 0x000C08: 0x49A0059802D70808 Ffma
    temp_310 = fma(temp_304, vp_c6.data[11].y, temp_305);
    // 0x000C10: 0x49A0008C02570601 Ffma
    temp_311 = fma(temp_306, vp_c3.data[9].y, temp_301);
    // 0x000C18: 0x49A0018C01D70603 Ffma
    temp_312 = fma(temp_306, vp_c3.data[7].y, temp_302);
    // 0x000C28: 0x49A0020C02970602 Ffma
    temp_313 = fma(temp_306, vp_c3.data[10].y, temp_303);
    // 0x000C30: 0x49A0038C02170607 Ffma
    temp_314 = fma(temp_306, vp_c3.data[8].y, temp_307);
    // 0x000C38: 0x4C9807980307000B Mov
    // 0x000C48: 0x49A0041802E70508 Ffma
    temp_315 = fma(temp_299, vp_c6.data[11].z, temp_310);
    // 0x000C50: 0x49A0008C02670001 Ffma
    temp_316 = fma(temp_309, vp_c3.data[9].z, temp_311);
    // 0x000C58: 0x49A0018C01E70003 Ffma
    temp_317 = fma(temp_309, vp_c3.data[7].z, temp_312);
    // 0x000C68: 0x49A0010C02A70002 Ffma
    temp_318 = fma(temp_309, vp_c3.data[10].z, temp_313);
    // 0x000C70: 0x49A0038C02270007 Ffma
    temp_319 = fma(temp_309, vp_c3.data[8].z, temp_314);
    // 0x000C78: 0x49A00B9400171617 Ffma
    temp_320 = fma(temp_146, vp_c5.data[0].y, temp_252);
    // 0x000C88: 0x4C6810180BB70909 Fmul
    temp_321 = temp_295 * vp_c6.data[46].w;
    // 0x000C90: 0xEFF07F800E47FF17 Ast
    out_attr6.y = temp_320;
    // 0x000C98: 0x51A0059802F70808 Ffma
    temp_322 = fma(temp_315, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000CA8: 0xEFF07F801187FF09 Ast
    out_attr9.z = temp_321;
    // 0x000CB0: 0x4C58100C02770101 Fadd
    temp_323 = temp_316 + vp_c3.data[9].w;
    // 0x000CB8: 0xEFF07F801007FF08 Ast
    out_attr8.x = temp_322;
    // 0x000CC8: 0x4C58100C01F70303 Fadd
    temp_324 = temp_317 + vp_c3.data[7].w;
    // 0x000CD0: 0xEFF07F800787FF01 Ast
    gl_Position.z = temp_323;
    // 0x000CD8: 0x4C58100C02B70202 Fadd
    temp_325 = temp_318 + vp_c3.data[10].w;
    // 0x000CE8: 0xEFF07F800707FF03 Ast
    gl_Position.x = temp_324;
    // 0x000CF0: 0x4C58100C02370707 Fadd
    temp_326 = temp_319 + vp_c3.data[8].w;
    // 0x000CF8: 0xEFF07F8007C7FF02 Ast
    gl_Position.w = temp_325;
    // 0x000D08: 0xEFF07F800747FF07 Ast
    gl_Position.y = temp_326;
    // 0x000D10: 0xE30000000007000F Exit
    return;
}
